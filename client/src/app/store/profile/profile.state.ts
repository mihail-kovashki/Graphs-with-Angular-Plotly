export interface IProfileState {
  userProfilePicture: string;
  userFirstName: string;
  userLastName: string;
  userGender: string;
  userUsername: string;
  userAge: string;
  profilePicAdded: boolean;
  userDescription: string;
  userImages: Array<string>;
}

export const initialState: IProfileState = {
  userProfilePicture: null,
  userFirstName: 'Loading ...',
  userLastName: 'Loading ...',
  userGender: 'Loading ...',
  userUsername: 'Loading ...',
  userAge: 'Loading ...',
  profilePicAdded: false,
  userDescription: 'Loading ...',
  userImages: []
};
