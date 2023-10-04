import PropTypes from 'prop-types';

import { StyledButton } from './ButtonIcon.styled';

export const ButtonIcon = props => {
  const { type = 'button', handler = null, children } = props;

  return (
    <StyledButton type={type} onClick={handler}>
      {children}
    </StyledButton>
  );
};

ButtonIcon.propTypes = {
  type: PropTypes.string.isRequired,
  handler: PropTypes.func,
  children: PropTypes.node,
};
