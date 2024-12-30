# Unhandled Exceptions and Rejections in Node.js

This repository demonstrates a common error in Node.js applications: the lack of proper error handling for unhandled exceptions and rejections.  Unhandled errors can lead to application crashes, data loss, and instability.

## Bug Description
The `bug.js` file contains a simple HTTP server. However, it lacks robust error handling mechanisms.  If an unexpected error occurs during request processing, the application will crash without logging useful information.

## Solution
The `bugSolution.js` file shows how to improve error handling using `process.on('uncaughtException', ...)` and `process.on('unhandledRejection', ...)` to gracefully handle unexpected situations and log relevant information for debugging.