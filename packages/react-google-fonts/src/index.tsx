import * as React from "react";

export type GoogleFontsProps = {
  /**
   * URL to your Google Fonts StyleSheet.
   *
   * Be sure to end with `&display=swap` for best performance.
   */
  href: string;
};

let hydrated = false;

const GoogleFonts: React.FC<GoogleFontsProps> = ({ href }) => {
  const hydratedRef = React.useRef(false);
  const [, rerender] = React.useState(false);

  React.useEffect(() => {
    if (!hydratedRef.current) {
      hydrated = true;
      hydratedRef.current = true;
      rerender(true);
    }
  }, []);

  return (
    <React.Fragment>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link rel="preload" as="style" href={href} />
      <link href={href} rel="stylesheet" media={!hydrated ? "print" : "all"} />
    </React.Fragment>
  );
};

export default GoogleFonts;
