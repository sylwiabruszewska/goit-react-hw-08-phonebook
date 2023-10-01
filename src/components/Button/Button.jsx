import PropTypes from 'prop-types';

import { StyledButton } from './Button.styled';

export const Button = props => {
  const { type = 'button', handler = null, children: text } = props;

  return (
    <StyledButton type={type} onClick={handler}>
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handler: PropTypes.func,
};
