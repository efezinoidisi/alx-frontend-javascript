// accepts two promises, returns value of the promise that resolves first.

export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]).then((value) => value);
}
