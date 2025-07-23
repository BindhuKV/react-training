import '../../css/layout/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Recipe Finder. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer