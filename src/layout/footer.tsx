const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container flex justify-center py-8">
        <span className="text-white/50">
          Copyright © John Adibe {new Date().getFullYear()} All rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
