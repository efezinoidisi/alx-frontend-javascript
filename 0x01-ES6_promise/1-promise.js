/**
 *
 * @param {boolean} success - if true resolves the promise
 * @returns a promise
 */

export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    }

    reject(new Error('The fake API is not working currently'));
  });
}
