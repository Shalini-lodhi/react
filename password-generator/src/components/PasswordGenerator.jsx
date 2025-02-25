import React, { useState, useEffect, useRef, useCallback } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  // Function to generate password
  const generatePassword = useCallback(() => {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) characters += "0123456789";
    if (includeSpecialChars) characters += "!@#$%^&*()_+-=[]{}|;:'\",.<>?/";

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }

    setPassword(generatedPassword);
  }, [length, includeNumbers, includeSpecialChars]);

  // useEffect to update password when dependencies change
  useEffect(() => {
    generatePassword();
  }, [length, includeNumbers, includeSpecialChars, generatePassword]);

  // Copy password to clipboard
  const copyToClipboard = () => {
    passwordRef.current?.select();
    navigator.clipboard.writeText(password);
    alert("✅ Password Copied!");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6 text-green-400">🔐 Password Generator</h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96 text-center">
        {/* Password Display */}
        <div className="flex mb-4 border border-gray-600 rounded overflow-hidden">
          <input
            ref={passwordRef}
            type="text"
            value={password}
            readOnly
            className="w-full px-3 py-2 bg-gray-700 text-white outline-none"
          />
          <button
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-700 transition-all"
          >
            📋 Copy
          </button>
        </div>

        {/* Length Slider */}
        <div className="mt-4 text-left">
          <label className="block text-sm font-medium">🔢 Password Length: <span className="text-yellow-400">{length}</span></label>
          <input
            type="range"
            min="6"
            max="20"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full cursor-pointer accent-green-500"
          />
        </div>

        {/* Checkboxes for Options */}
        <div className="flex justify-between mt-4 text-sm">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
              className="w-4 h-4 accent-green-500"
            />
            <span>Include Numbers</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={includeSpecialChars}
              onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
              className="w-4 h-4 accent-green-500"
            />
            <span>Special Characters</span>
          </label>
        </div>

        {/* Generate Password Button */}
        <button
          onClick={generatePassword}
          className="mt-5 px-4 py-2 w-full bg-green-500 hover:bg-green-700 rounded transition-all text-lg font-semibold"
        >
          🔄 Generate Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
