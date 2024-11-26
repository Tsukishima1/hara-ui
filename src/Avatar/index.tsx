import React, {
  Children,
  cloneElement,
  FC,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  useState,
} from 'react';
import './styles/index.css';

interface AvatarProps {
  className?: string;
  style?: React.CSSProperties;
}

interface AvatarImgProps extends React.ImgHTMLAttributes<HTMLImageElement>, AvatarProps {}

const AvatarImg: FC<AvatarImgProps> = (props) => {
  const { className, style, src, alt, onLoad, onError } = props;

  return (
    <img
      className={`hara-avatar-img ${className !== undefined ? className : ''}`}
      style={style}
      src={src}
      alt={alt}
      onLoad={(e) => {
        console.log('Image loaded');
        if (onLoad) onLoad(e);
      }}
      onError={(e) => {
        console.log('Image load error');
        if (onError) onError(e);
      }}
    />
  );
};

const AvatarFallback: FC<PropsWithChildren<AvatarProps>> = (props) => {
  const { className, style, children } = props;

  return (
    <div
      className={`hara-avatar-fallback ${
        className !== undefined ? className : ''
      }`}
      style={style}
    >
      {children}
    </div>
  );
};

const Avatar: FC<PropsWithChildren<AvatarProps>> = (props) => {
  const { children, className, style } = props;

  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    console.log('handleLoad called');
    setIsLoaded(true);
  };

  const handleError = () => {
    console.log('handleError called');
    setHasError(true);
  };

  const renderChildren = () => {
    return Children.map(children, (child) => {
      if (isValidElement(child)) {
        if (child.type === AvatarImg) {
          return cloneElement(child as ReactElement<AvatarImgProps>, {
            onLoad: handleLoad,
            onError: handleError,
            style: { display: isLoaded ? 'block' : 'none', ...child.props.style },
          });
        }
        if (child.type === AvatarFallback) {
          return hasError || !isLoaded ? child : null;
        }
      }
      return child;
    });
  };

  return (
    <div
      className={`hara-avatar ${className !== undefined ? className : ''}`}
      style={style}
    >
      {renderChildren()}
    </div>
  );
};

export { Avatar, AvatarImg, AvatarFallback };
