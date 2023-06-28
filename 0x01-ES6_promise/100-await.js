import { uploadPhoto, createUser } from './utils';

export default async function asyncUploader() {
  const photo = await uploadPhoto();
  const user = await createUser();

  return {
    photo,
    user,
  };
}
