import PropTypes from 'prop-types';

import { StyledButton, StyledIcon } from './ButtonDelete.styled';

export const ButtonDelete = props => {
  const { type = 'button', handler = null } = props;

  return (
    <StyledButton type={type} onClick={handler}>
      <StyledIcon />
    </StyledButton>
  );
};

ButtonDelete.propTypes = {
  type: PropTypes.string.isRequired,
  handler: PropTypes.func,
};
