export const errorHandler = (statusCode, message) => {
    return  new Error(message, statusCode = statusCode)
}