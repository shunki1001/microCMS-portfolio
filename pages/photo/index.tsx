import Script from "next/script";

const Photo = () => {
  return (
    <>
      <iframe width="100%" height="2000px" scrolling="no" src="https://embedsocial.com/api/pro_hashtag/d1987a1522a49d80996855bd65aeaaea6d454bfc">
        </iframe>
        <Script src="https://embedsocial.com/js/iframe.js"></Script>
      <script>iFrameResize();</script>
    </>
  );
};

export default Photo;
