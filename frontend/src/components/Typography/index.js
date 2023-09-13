import clsx from 'clsx';
import { StyledBox } from 'styles/components/Typography';

export const Span = ({ children, className, ellipsis, textTransform, ...props }) => {
  return (
    <StyledBox
      ellipsis={ellipsis}
      className={clsx({ [className || '']: true })}
      component="span"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const Paragraph = ({ children, className, ellipsis, textTransform, ...props }) => {
  return (
    <StyledBox
      ellipsis={ellipsis}
      className={clsx({ [className || '']: true })}
      component="p"
      mb={0}
      mt={0}
      fontSize="14px"
      {...props}
    >
      {children}
    </StyledBox>
  );
};
