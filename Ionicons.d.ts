Step 1: Set Up Your React Project
Create a new React project:

bash
Copy code
npx create-react-app file-hosting-service
cd file-hosting-service
Step 2: Define the File Storage Logic
Create a simple file storage class.

javascript
Copy code
// src/FileStorage.js
class FileStorage {
    constructor() {
        this.files = [];
    }

    upload(fileName, size) {
        if (this.findFile(fileName)) {
            throw new Error('File already exists');
        }
        this.files.push({ name: fileName, size });
    }

    get(fileName) {
        const file = this.findFile(fileName);
        return file ? file.size : undefined;
    }

    copy(source, dest) {
        const file = this.findFile(source);
        if (!file) {
            throw new Error('Source file does not exist');
        }
        this.upload(dest, file.size);
    }

    search(prefix) {
        return this.files
            .filter(file => file.name.startsWith(prefix))
            .sort((a, b) => b.size - a.size || a.name.localeCompare(b.name))
            .slice(0, 10);
    }

    findFile(name) {
        return this.files.find(file => file.name === name);
    }
}

export default FileStorage;
Step 3: Create React Components
Build a simple UI to interact with your file storage.

javascript
Copy code
// src/App.js
import React, { useState } from 'react';
import FileStorage from './FileStorage';

const App = () => {
    const [storage] = useState(new FileStorage());
    const [message, setMessage] = useState('');
    const [fileName, setFileName] = useState('');
    const [fileSize, setFileSize] = useState('');

    const handleUpload = () => {
        try {
            storage.upload(fileName, Number(fileSize));
            setMessage('File uploaded successfully!');
        } catch (error) {
            setMessage(error.message);
        }
    };

    const handleGet = () => {
        const size = storage.get(fileName);
        setMessage(size ? `File size: ${size} bytes` : 'File not found');
    };

    const handleCopy = () => {
        const destName = prompt('Enter destination file name:');
        try {
            storage.copy(fileName, destName);
            setMessage('File copied successfully!');
        } catch (error) {
            setMessage(error.message);
        }
    };

    const handleSearch = () => {
        const results = storage.search(fileName);
        setMessage(`Search results: ${results.map(file => file.name).join(', ') || 'No files found'}`);
    };

    return (
        <div>
            <h1>File Hosting Service</h1>
            <input
                type="text"
                placeholder="File Name"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
            />
            <input
                type="number"
                placeholder="File Size"
                value={fileSize}
                onChange={(e) => setFileSize(e.target.value)}
            />
            <button onClick={handleUpload}>Upload</button>
            <button onClick={handleGet}>Get Size</button>
            <button onClick={handleCopy}>Copy</button>
            <button onClick={handleSearch}>Search</button>
            <p>{message}</p>
        </div>
    );
};

export default App;

