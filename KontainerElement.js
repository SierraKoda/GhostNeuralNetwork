import Kontainer from 'kontainer-js';

 

export default class MP4 {

 

  constructor(width, height) {

    Kontainer.use('mp4'); // format (mp4|webm) needs to be set before any API call

    this.width = width;

    this.height = height;

  }

 

  render() {

    return (

    <file>

      <ftyp majorBrand="isom" />

      <moov>

        <mvhd creationTime={new Date()} modificationTime={new Date()} timeScale={1} nextTrackId={4} />

        <trak>

          <tkhd creationTime={new Date()} modificationTime={new Date()} trackId={1} width={this.width} height={this.height} />

          <mdia>

            ...

          </mdia>

        </trak>

      </moov>

    </file>

    );

  }

}



