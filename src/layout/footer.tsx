const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container flex justify-center py-8">
        <span className="text-zinc-500 text-center">
          Copyright © John Adibe {new Date().getFullYear()} All rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
