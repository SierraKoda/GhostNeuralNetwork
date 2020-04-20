// Kontainer.createElement()

    //   Accepts: type, props, children...

    //   Returns: KontainerElement

    return Kontainer.createElement('file', null,

      Kontainer.createElement('ftyp', {majorBrand: 'isom'}),

      Kontainer.createElement('moov', null,

        Kontainer.createElement('mvhd', {creationTime: new Date(0), modificationTime: new Date(), timeScale: 1, nextTrackId: 4}),

        Kontainer.createElement('trak', null,

          Kontainer.createElement('tkhd', {creationTime: new Date(0), modificationTime: new Date(), trackId: 1, width: 640, height: 480}),

          Kontainer.createElement('mdia', null,

            ...

            // KontainerElement can be a child of other elements to compose a large nested tree.

          )

        )

      )

    );

