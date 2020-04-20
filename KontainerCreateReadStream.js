var function createReadStream(){
	
 const input = fs.createReadStream('./test.mp4');

  const transform = Kontainer.transform((type, props, children) => {

    if (type === 'tkhd') {

      // Change video dimensions

      props.width /= 2;

      props.height /= 2;

    }

  });

  input.pipe(transform).pipe(process.stdout);
}
  