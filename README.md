
# Node.js File Uploader

This is a simple Node.js application for uploading files using `Express` and `express-fileupload` middleware. The application includes middleware to limit file extensions, file size, and ensure files are included in the request payload.

## Features

- Upload multiple image files
- Limit file extensions to `.png`, `.jpeg`, and `.jpg`
- Limit file size to 5 MB
- Ensure files are included in the request payload

## Project Structure

```
.gitignore
app.js
files/
index.html
middleware/
    fileExtensionLimiter.js
    fileSizeLimiter.js
    filesPayloadExists.js
package.json
```

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```sh
    cd node-files-upload
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the server:
    ```sh
    npm start
    ```
   or for development with live reload:
    ```sh
    npm run dev
    ```
2. Open your browser and navigate to `http://localhost:3500` to access the file uploader interface.

## Middleware

### File Extension Limiter

Located in `fileExtensionLimiter.js` , this middleware limits the allowed file extensions.

### File Size Limiter

Located in `fileSizeLimiter.js` , this middleware limits the file size to 5 MB.

### Files Payload Exists

Located in `filesPayloadExists.js` , this middleware ensures that files are included in the request payload.

## License

This project is licensed under the ISC License.

## Acknowledgments

- [Express](https://expressjs.com/)
- [express-fileupload](https://www.npmjs.com/package/express-fileupload)
