/**
 *
 */
module.exports = {
    initState: {
        pieces: [
            {id: 0, color: 'white', height: 2, location: 'B2'},
            {id: 1, color: 'white', height: 2, location: 'E8'},
            {id: 2, color: 'white', height: 2, location: 'H2'},
            {id: 3, color: 'black', height: 2, location: 'B5'},
            {id: 4, color: 'black', height: 2, location: 'E2'},
            {id: 5, color: 'black', height: 2, location: 'H5'}
        ],
        blackReserve: 12,
        whiteReserve: 12
    },
    pieceImages: {
        white1: {
            url: 'assets/whiteSingle.png',
            width: 150,
            height: 150
        },
        white2: {
            url: 'assets/whiteDouble.png',
            width: 150,
            height: 160
        },
        black1: {
            url: 'assets/blackSingle.png',
            width: 150,
            height: 150
        },
        black2: {
            url: 'assets/blackDouble.png',
            width: 150,
            height: 160
        }
    },
    reserve: {
        black: {
            top: 40,
            left: 1060,
            width: 335,
            height: 200
        },
        white: {
            top: 1190,
            left: 35,
            width: 335,
            height: 200
        }
    },
    board: {
        width: 1400,
        height: 1400,
        image: 'assets/board.png'
    },
    locations: {
        A1: {
            x: 200,
            y: 1015
        },
        A2: {
            x: 200,
            y: 863
        },
        A3: {
            x: 200,
            y: 711
        },
        A4: {
            x: 200,
            y: 557
        },
        A5: {
            x: 200,
            y: 403
        },
        B1: {
            x: 330,
            y: 1085
        },
        B2: {
            x: 330,
            y: 935
        },
        B3: {
            x: 330,
            y: 783
        },
        B4: {
            x: 330,
            y: 631
        },
        B5: {
            x: 330,
            y: 479
        },
        B6: {
            x: 330,
            y: 327
        },
        C1: {
            x: 460,
            y: 1165
        },
        C2: {
            x: 460,
            y: 1015
        },
        C3: {
            x: 460,
            y: 863
        },
        C4: {
            x: 460,
            y: 711
        },
        C5: {
            x: 460,
            y: 557
        },
        C6: {
            x: 460,
            y: 403
        },
        C7: {
            x: 460,
            y: 255
        },
        D1: {
            x: 590,
            y: 1237
        },
        D2: {
            x: 590,
            y: 1085
        },
        D3: {
            x: 590,
            y: 935
        },
        D4: {
            x: 590,
            y: 783
        },
        D5: {
            x: 590,
            y: 631
        },
        D6: {
            x: 590,
            y: 479
        },
        D7: {
            x: 590,
            y: 327
        },
        D8: {
            x: 590,
            y: 175
        },
        E1: {
            x: 719,
            y: 1317
        },
        E2: {
            x: 719,
            y: 1165
        },
        E3: {
            x: 720,
            y: 1015
        },
        E4: {
            x: 719,
            y: 863
        },
        E5: {
            x: 719,
            y: 711
        },
        E6: {
            x: 719,
            y: 557
        },
        E7: {
            x: 719,
            y: 403
        },
        E8: {
            x: 719,
            y: 255
        },
        E9: {
            x: 719,
            y: 99
        },
        F1: {
            x: 849,
            y: 1237
        },
        F2: {
            x: 849,
            y: 1085
        },
        F3: {
            x: 849,
            y: 935
        },
        F4: {
            x: 849,
            y: 783
        },
        F5: {
            x: 849,
            y: 631
        },
        F6: {
            x: 849,
            y: 479
        },
        F7: {
            x: 849,
            y: 327
        },
        F8: {
            x: 849,
            y: 175
        },
        G1: {
            x: 976,
            y: 1165
        },
        G2: {
            x: 976,
            y: 1015
        },
        G3: {
            x: 976,
            y: 863
        },
        G4: {
            x: 976,
            y: 711
        },
        G5: {
            x: 976,
            y: 557
        },
        G6: {
            x: 976,
            y: 403
        },
        G7: {
            x: 976,
            y: 255
        },
        H1: {
            x: 1105,
            y: 1085
        },
        H2: {
            x: 1105,
            y: 935
        },
        H3: {
            x: 1105,
            y: 783
        },
        H4: {
            x: 1105,
            y: 631
        },
        H5: {
            x: 1105,
            y: 479
        },
        H6: {
            x: 1105,
            y: 327
        },
        I1: {
            x: 1234,
            y: 1015
        },
        I2: {
            x: 1234,
            y: 863
        },
        I3: {
            x: 1234,
            y: 711
        },
        I4: {
            x: 1234,
            y: 557
        },
        I5: {
            x: 1234,
            y: 403
        },
    }
};