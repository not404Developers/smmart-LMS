import './ResponsiveImage.css';

const ResponsiveImage = ({ src, alt, className = '' }) => {
  return (
    <div className={`responsive-image ${className}`}>
      <picture>
        <source media="(min-width: 1024px)" srcSet={`${src}-large.jpg`} />
        <source media="(min-width: 768px)" srcSet={`${src}-medium.jpg`} />
        <source srcSet={`${src}-small.jpg`} />
        <img src={`${src}-small.jpg`} alt={alt} />
      </picture>
    </div>
  );
};

export default ResponsiveImage;