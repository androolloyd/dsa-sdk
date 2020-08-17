module.exports = {
  genesis: "0x0000000000000000000000000000000000000000",
  core: {
    index: "0x2971AdFa57b20E5a416aE5a708A8655A9c74f723",
    list: "0x4c8a1BEb8a87765788946D6B19C6C6355194AbEb",
    account: "0x939Daad09fC4A9B8f8A9352A485DAb2df4F4B3F8",
    connector: "0xD6A602C01a023B98Ecfb29Df02FBA380d3B21E0c",
    events: "0x2af7ea6Cb911035f3eb1ED895Cb6692C39ecbA97",
    instapool: "0x06cb7c24990cbe6b9f99982f975f9147c000fec6",
  },
  connectors: {
    basic: "0x6a31c5982C5Bc5533432913cf06a66b6D3333a95",
    auth: "0xB3242e09C8E5cE6E14296b3d3AbC4C6965F49b98",
    authority: "0xB3242e09C8E5cE6E14296b3d3AbC4C6965F49b98", // same address as of "auth" to not break things with upgrade
    compound: "0x07F81230d73a78f63F0c2A3403AD281b067d28F8",
    maker: "0xac02030d8a8F49eD04b2f52C394D3F901A10F8A9",
    instapool: "0xCeF5f3c402d4fef76A038e89a4357176963e1464",
    oasis: "0xE554c84c030bd5e850cDbd17f6583818b8dE5b1F",
    kyber: "0x7043FC2E21865c091EEaE37C38E3d82BcCDF5D5C",
    curve: "0xC74902Ad45C8223da10EfdCfF2DeD12184e9D9b5",
    curve_susd: "0xC74902Ad45C8223da10EfdCfF2DeD12184e9D9b5",
    curve_sbtc: "0xe3bC928D9DAA89A0f08Cf77b227B7080B9a5105d",
    curve_y: "0x861a2250FcDBe57041289623561D5D79585DF5dc",
    oneInch: "0x1beCC315E044E8ee8898011609E63F8259d3B124",
    dydx: "0x6AF6C791c869DfA65f8A2fa042fA47D1535Bef25",
    aave: "0x3fd79E82CCAc22A1c1b504e8a04bec133CB3f282",
    migrate: "0xcb5cbc3f397e0024fac67cf6dd465e02ca91c215",
    compoundImport: "0xc2954213923DdF0A6E5F5eCFD2375AC25440960b",
    uniswap: "0x62EbfF47B2Ba3e47796efaE7C51676762dC961c0",
    comp: "0xB4a04F1C194bEed64FCE27843B5b3079339cdaD4",
    staking: "0xe5b66b785bd6b6708BB814482180C136Ddbcd687",
  },
  read: {
    core: "0xCCf112e4348Fb273381D37F20dF49135DA973Be5",
    erc20: "0x6d9c624844e61280c19fd7ef588d79a6de893d64",
    compound: "0x540b719fe7788Fbd4eE98033d9Fb980D753f0ED2",
    maker: "0x0A7008B38E7015F8C36A49eEbc32513ECA8801E5",
    oasis: "0xa3d13105397F3b13Dd47cd1f90a50F95A60cdd56",
    kyber: "0x8240b601d9B565e2BefaA3DA82Cc984E76cB3499",
    curve: "0x734c90119A0012eF744e3a0ee74691b4f05A2D7e",
    curve_susd: "0x734c90119A0012eF744e3a0ee74691b4f05A2D7e",
    curve_sbtc: "0xc8ff9e290e65972a1b3fc67e1ab7451088a74752",
    curve_y: "0xaf122FB1C70b913AF467a9D924890f92c109bfc3",
    oneInch: "0x40c71a20938ff932bea18f674e73be670ea47ccf",
    dydx: "0xcb704D9505Fbbf61478F06741C75F34eA84Ec85C",
    aave: "0x5616a3d7e5c65d9d4af05e9cda6541db18d64790",
    uniswap: "0x492e5f3f01d20513fc0d53ca0215b6499faec8a0",
  },
};
