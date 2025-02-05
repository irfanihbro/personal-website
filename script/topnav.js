(function (_0x499089, _0x665846) {
  const _0x32fa3e = _0x53df,
    _0x32ab74 = _0x499089();
  while (!![]) {
    try {
      const _0x3aa997 =
        parseInt(_0x32fa3e(0x194)) / 0x1 +
        -parseInt(_0x32fa3e(0x184)) / 0x2 +
        (-parseInt(_0x32fa3e(0x18f)) / 0x3) *
          (-parseInt(_0x32fa3e(0x182)) / 0x4) +
        (-parseInt(_0x32fa3e(0x18c)) / 0x5) *
          (-parseInt(_0x32fa3e(0x180)) / 0x6) +
        parseInt(_0x32fa3e(0x186)) / 0x7 +
        (parseInt(_0x32fa3e(0x188)) / 0x8) *
          (parseInt(_0x32fa3e(0x18d)) / 0x9) +
        -parseInt(_0x32fa3e(0x17f)) / 0xa;
      if (_0x3aa997 === _0x665846) break;
      else _0x32ab74["push"](_0x32ab74["shift"]());
    } catch (_0x520c29) {
      _0x32ab74["push"](_0x32ab74["shift"]());
    }
  }
})(_0x5aab, 0x4ab58);
function _0x53df(_0x38ec64, _0x1255a3) {
  const _0x5aab8a = _0x5aab();
  return (
    (_0x53df = function (_0x53dfcc, _0x17541d) {
      _0x53dfcc = _0x53dfcc - 0x17f;
      let _0x35445c = _0x5aab8a[_0x53dfcc];
      return _0x35445c;
    }),
    _0x53df(_0x38ec64, _0x1255a3)
  );
}
function _0x5aab() {
  const _0x40a3b6 = [
    "569315EbaNEg",
    "-100px",
    "style",
    "querySelectorAll",
    "17371330PbPORh",
    "12FfPFmO",
    "classList",
    "64nDjJmx",
    "target",
    "108062KZFGbG",
    "setProperty",
    "3811346riCLCW",
    "observe",
    "4025656IfcCjY",
    "querySelector",
    "nav.top-nav",
    "remove",
    "271190DgZqOZ",
    "9CiXBYh",
    "active",
    "69693ilKhUx",
    "--scroll-padding",
    ".section-container\x20section",
    "forEach",
    "nav.top-nav\x20li",
  ];
  _0x5aab = function () {
    return _0x40a3b6;
  };
  return _0x5aab();
}
export function topNav() {
  const _0x52918a = _0x53df,
    _0x46fdb2 = document[_0x52918a(0x189)](_0x52918a(0x18a)),
    _0x3f75e5 = _0x46fdb2["offsetHeight"];
  document["documentElement"][_0x52918a(0x196)][_0x52918a(0x185)](
    _0x52918a(0x190),
    _0x3f75e5 + 0x1e + "px"
  );
  const _0x1da3d7 = document[_0x52918a(0x197)](_0x52918a(0x191)),
    _0x2f5722 = document[_0x52918a(0x197)](_0x52918a(0x193)),
    _0x82f395 = new IntersectionObserver(
      (_0x2ddc68) => {
        _0x2ddc68["forEach"]((_0x19c10b) => {
          const _0x266fa8 = _0x53df;
          _0x19c10b["isIntersecting"] &&
            _0x2f5722[_0x266fa8(0x192)]((_0x2779f4) => {
              const _0x2504f7 = _0x266fa8,
                _0x1e2c3f = _0x2779f4[_0x2504f7(0x181)][0x1],
                _0xab4443 = _0x19c10b[_0x2504f7(0x183)]["classList"][0x1],
                _0x1df906 = _0x2779f4["childNodes"][0x1]["childNodes"][0x2];
              _0xab4443 === _0x1e2c3f
                ? _0x1df906["classList"]["add"](_0x2504f7(0x18e))
                : _0x1df906[_0x2504f7(0x181)][_0x2504f7(0x18b)]("active");
            });
        });
      },
      { rootMargin: _0x52918a(0x195) }
    );
  _0x1da3d7[_0x52918a(0x192)]((_0x111501) => {
    const _0x155faf = _0x52918a;
    _0x82f395[_0x155faf(0x187)](_0x111501);
  });
}
