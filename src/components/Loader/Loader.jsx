import { Oval } from 'react-loader-spinner';
import { StyledLoader, StyledText } from './Loader.styled';

export const Loader = () => {
  return (
    <StyledLoader>
      <Oval
        height={50}
        width={50}
        color="#8dc6ff"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#0092ca"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
      <StyledText>Contacts are loading...</StyledText>
    </StyledLoader>
  );
};
