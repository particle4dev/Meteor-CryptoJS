Tinytest.add('sha512', function(testTiny){
    //http://www.sha1-online.com/
    var hash = CryptoJS.SHA512("Message");
    testTiny.equal(hash.toString(), '4fb472dfc43def7a46ad442c58ac532f89e0c8a96f23b672f5fd637652eab158d4d589444ef7530a34e6626b40830b4e1ec5364611ae31c599bffa958e8b4c4e', "sha512 generator fail");
    hash = CryptoJS.SHA512("hello");
    testTiny.equal(hash.toString(), '9b71d224bd62f3785d96d46ad3ea3d73319bfbc2890caadae2dff72519673ca72323c3d99ba5c11d7c7acc6e14b8c5da0c4663475c2e5c3adef46f73bcdec043', "sha512 generator fail");
    hash = CryptoJS.SHA512("");
    testTiny.equal(hash.toString(), 'cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e', "sha512 generator fail");
});