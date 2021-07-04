function shadowizard(options) {
  let images = document.querySelectorAll('.shadowizard');

  const { shadow_type, padding } = options;

  shadow_type === 'hard' ? (shadow_type = '0px') : (shadow_type = '15px');

  images.map((image) => {
    image.style.boxShadow = `10px 10px ${shadow_type} 1px rgba(0,0,0,0.12)`;

    if (padding) image.style.padding = '1rm';
  });
}

module.exports.shadowizard = shadowizard