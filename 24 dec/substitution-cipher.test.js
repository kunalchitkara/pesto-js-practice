const substitutionCipher = require('./substitution-cipher');

describe('testing substitution cipher scenarios', () => {
    it('should run in case of a positive scenario', () => {
        expect(substitutionCipher('Aa Bb Cc Xx Yy Zz !?.\n')).toBe('Ee Hh Gg Dd Cc Ff !?.\n');
    });

    it('should run in case of a long positive scenario', () => {
        expect(substitutionCipher('The Quick Brown Fox Jumped Over The Lazy Dog!')).toBe('Zni Uymgo Hxsat Lsd Pyqvij Sbix Zni Refc Jsk!');
    });

    it('should run in case of a very long positive scenario', () => {
        expect(substitutionCipher('Lorem ipsum dolor sit amet, consectetur adipiscing elit! Sed sit amet tortor id turpis pharetra ultricies eget ac ipsum.\nNam porttitor, ligula vitae tincidunt lacinia, lacus eros tempus neque, ac tincidunt nisi dui ac dui. Ut volutpat mi non velit varius, at scelerisque lorem efficitur. Etiam vitae molestie nibh. Integer quis arcu non tortor auctor viverra et at leo?\nSed lacinia nunc non est tincidunt, vel pellentesque magna finibus. Nullam sed lectus sed massa convallis posuere id in augue. Mauris pharetra felis erat, vitae condimentum nisi bibendum id. Vestibulum vitae neque a lectus gravida rhoncus lobortis id elit. Maecenas semper.'))
            .toBe('Rsxiq mvwyq jsrsx wmz eqiz, gstwigzizyx ejmvmwgmtk irmz! Wij wmz eqiz zsxzsx mj zyxvmw vnexizxe yrzxmgmiw ikiz eg mvwyq.\nTeq vsxzzmzsx, rmkyre bmzei zmtgmjytz regmtme, regyw ixsw ziqvyw tiuyi, eg zmtgmjytz tmwm jym eg jym. Yz bsryzvez qm tst birmz bexmyw, ez wgirixmwuyi rsxiq illmgmzyx. Izmeq bmzei qsriwzmi tmhn. Mtzikix uymw exgy tst zsxzsx eygzsx bmbixxe iz ez ris?\nWij regmtme tytg tst iwz zmtgmjytz, bir virritziwuyi qekte lmtmhyw. Tyrreq wij rigzyw wij qewwe gstberrmw vswyixi mj mt eykyi. Qeyxmw vnexizxe lirmw ixez, bmzei gstjmqitzyq tmwm hmhitjyq mj. Biwzmhyryq bmzei tiuyi e rigzyw kxebmje xnstgyw rshsxzmw mj irmz. Qeigitew wiqvix.');
    });
});