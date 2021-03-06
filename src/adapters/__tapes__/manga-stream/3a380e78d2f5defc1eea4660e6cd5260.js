var path = require("path");

/**
 * GET /r/a_trail_of_blood/15/4622/10
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept-encoding: gzip, deflate
 * host: readms.net
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 12 Nov 2018 04:40:27 GMT");
  res.setHeader("content-type", "text/html; charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d85c047dc82f1c91b013c9c270396c36f1541997626; expires=Tue, 12-Nov-19 04:40:26 GMT; path=/; domain=.readms.net; HttpOnly"]);
  res.setHeader("last-modified", "Thu, 12 Oct 2017 16:46:08 GMT");
  res.setHeader("expires", "Mon, 12 Nov 2018 05:40:27 GMT");
  res.setHeader("cache-control", "max-age=3600");
  res.setHeader("vary", "Accept-Encoding, User-Agent");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "4786520bfa522e45-NRT");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA+w8a3PbtrLf8ys2bKeSpqZoyZYfsaWO82iSuW2aNm7m9nQ6GohcirBAgAVAyTpn+t/vLF+ino7SpNW9t8pMTILAPoHdxWLJ68fPf3h2+8vbFxDZWAweXdMfEEyO+w5KhxqQBYNHAADXMVoGfsS0Qdt3Uhu6F07xyHIrcHADt5pxASqEp0KpADo9cOEtGyN0jsGF75kcM3hnNbL42svH1EBLFmPfmXKcJUpbB3wlLUrbd2Y8sFE/wCn30c1ujoBLbjkTrvGZwH6nfeysgwrQ+JonlitZg/YTsgBCjQhxRo+SgksEwScIb5hOrTqCpwKZHx3BDxLhLUcfj+BVKi1quC8vmAwIwBxipbFdYhdcTiDSGPadyNrEPPG8mN37gWyPlLLGapbQja9iL1TSumyGRsXonbbP28eeb8xSczvmsu0b44BG0XeMnQs0EaJ1gEuLY83tvO+YiJ1cnLqzafjfye/Jv/71/seX/3V2exP13r4XL38If3zz6p163r0fvfj6x8nb+2c334o3L3CqXrw6eSeODR+993/48b1844CvlTFK8zGXfYdJJeexSo0zeFTjLSOE+yTRnE0vZFO6b3NfOWDnCfYdHrMxevdu3s8brI43kdLWTy3sDSiDVP7q0vaYMWhNJsJMryabZiS9b7rdy+Pu5boQc7py4h67Lry6/f67HpiIx0cQKg2vX5y5F2DShOYjzeq8AwqMUVoDrjuoBv/KQxAWXr+Ay9+K1nzygdH+grw749ES65mIT9t3xhlce3m3EtKvKAMe/kagl6Dk8rB4b707NmV5a8EB/WZcBmrW9uPkNsIYoQ//WZLViPmTsVapDJ5A44vwhP41jpa6JJrHTM/p+cnF+aXvb35+i/c2gxGGKx0M+koGBYher7ftcQnBX0NB/H3H5YSenp+frzwN+JQHqMuh1bM/cklVklwXf7kWTVtyq1XC5tkSZIFxT0gN28S7op39dMFGFvrQYI2rFfquvdyqPro=", "base64"));
  res.write(new Buffer("HqlgTn8DPgUe9B2NLEDtSjYtDQo98QUzpu9INh0xDfkfN8CQpcKWt/nIGhHrI92o3ud6lFqrZMFMfuOsDLBqPBYIvhKCJQYDBwJmWdHcd8r2spnpMXmGL2Lj5gAcYJozF+8TJgMM+k7IhME6kSZhskRqtKukmDuD2xytZFM+ZmS9rz3qt2UY2QaXkA0+X7drLxdQccdW5DTSTAaVHaOhjLQc8Gmp3KJ/KbFSawsJkvYXcivwpKKGqByzmByFDRxcswXqVypGQn/tCb7Uq4QUaJUEaiZrMAqechhfOKs9C32vKH8BJ3OouW+/HlWcMo3ZAhrl0ljCteCrwhGjTFdIWmcvM+wes5b5k6GSQ8stk87gJmsAJeGWGtbZ3wVthNqgnjiDp/nFfqMDzcZKDkdMiKFJE1pdz7MmeMqEgHfUtB/EiPHJPE2dwav84vHjfcff8RiHUg15kigCQ/cgFbxOErUfrHg+jFCrIfNZgDFnzuD7ObxCreCmaNkPnpI4TCiccgZVZLU3hCSVfjSMSfEZELql6bcfIIlT1IKW7eCtVjE3GMCbsm0/UCZSk3SME05CNyqNmTN4V7aR4N9R234wbYRDg1OUwwBZIOZDw6VxBrcRwjtqhudZM7zj0uwJWU3majiOVCo0kq2dzBW8pNsnercyqjWbu2Hnw5E6g29TIeA7buxmDNdeKmrWatV21eAVYbzHkkRwP/MOZIF8nXJLUdlG27dhvK+E0s7gGf3JtigrYlxQtNUKV66XjyO71SQX4WMmr0qEIYOQuSPrkxD5AJ4ryexuu81SG7njFI1dMcSxCphYdcFCjbl080cLYhbRypMrZ/Ad9fmEODWOubGoH0D7U9Htg7wUZCTQfygt6RuDdcdVjIE1h1V5tC2ea8nzD1ODmjaOlev/3O7MoLVcjo0zeFdcfeBSXhJoiVuosUptplaVftw6W9L7FDUP+SZ57yBCKsvDYl2WatjAzOpCQCFcBUuDqa2IHyMeBCj7jtUp5gtmHSLGG0nwVSozvWG8Kgm2SRC5gPLQLdsTem3JplWcttjy5cHdphgvZly6FNhT+qTWbtLR5rg+f+DONEuSrSE82S2thFnVRq3LyEqXtngJ0FWxlfAjltglqOsLZ2RlNqTcUnxg4Fctr3XYa2F1rkL33kBxZWJnLV9ULrtO70F41XpcDuU3avcj1um+v+V1rT02tMTZUIXDEXHmnZx7vdOzY6+zYnQquTiDk3Nw4WbGJii5HBecLXWecsNHAoveZY+tJuNT/h5m8MzrnR7vZvCMGBxrxNxRP8Dg2YEx2PN6J93uTgYp3XkDL7kWDQM/KRU/yGTvwJg89Xrd84udTJ4SkyMmg2pfvp290wNj78TrdXu9neydgAuvIVCyYUEiBjBX6YN8nhwYn12v1+12dvLZBRfeK+4jcAk2QrAR9yf48LrsHhivHa/XOd+9Ljs0ZbWiTdgDzHUOjLljr9fp7VYknay8lgEmKAOUtKF+gMfjw+Kxe+n1Op2di7J7SQoM6djlnR8pJeAmUAKNT/x+8xDD3csDY/jC6x2f7TSy3YvMkxguKRFqLCYPMnnxWZj88G0/bMvWrbD/YC4A1vYpsAi4l5oein0TNsYPCnyLk41PFPiWB56bBHTAMexnm++dnnd6lkdO33JtbC6gZqf116zHv/v3wfLpOYNMMr2/Vi4fTN9ZQd/ZgdJ3XtB3fqD0XRT0XRwofZcFfZcHSl/nuCCwc3yoFHZKCjuHSmG3pLB7qBSelBSeHCqFpyWFp4dKYelKOofqSzqlM+kcqjfplO6kc6j+pFM6lM6hepRO6VI6h+pTuqVP6Q==", "base64"));
  res.write(new Buffer("HqpP6ZY+pXuoPqVb+pTuofqUbulTuofqU7qlT+keqk/plj6le6g+pXvmDL5j1f6ye7bnBvPBpMPq7WIvTpkGvWMPXkujJBqnPCur/dCg/CvBtL6Ctxqn+0u+hlnivXU+PJB9g/cWvtKEezfaWqnE8qkorCRpYsMgNsw9714ML4/LmjdWpmuYDSkbUsmYzl83wXBrJRUVQa+YRWCBgVFqwVguBMyYtGAVRCgSSM038BR9FSMw2FidUV0St48frSg8K8itE6LVzA1FygMg5WentxvOdrekoKB+kP6QIq55PM5lRQm1PKsFRVmxx+Nxe6neWcWeH8gi+dY5vczhHF+2EzmmEuqltNJmwjao7OT4eHh2vK4zwwNcUtrKWtl4QL5lGoRKUfXIqDYNHm0roh6lXAQrBdQPled+2XS+qImw1VYSm45QLHCOIEylTxUDzVZROD1lGlQYGqQi3i+bjdrQRqudP2m22gJDC1+vd8heU2i24GvoHF89+qPVphcKmmtYeNi0ETektkSgxRZ8mTW02kRXs0VDrx49+rKZ1xS32hoN/zc2N5I720RpQcjVp2dqFW+7rFFYxbryjFmrm42sDr9x1IiZplIlQvnEbXzdnHnd1teN5L5R8k56axfFE612wqXEoJkzPaJ6dvMETo+PwPNgFqGkBT/K17mx3J/Ms47G10oILsdPIO+aKMNJfhCkmstx0SHrG6sRF/gEslpl6muoOC6o3gPIn+e01WrOl2Y4FUBByAJ0wLIRlwHe9x2344BWWSaZM6HG+cxfqtRaN3fU7pb9i9HKT+kEfUulSD6kqHPbUS6S94tW68arrrvqw32hqrLvgJuYVwCLkh3BRvSyxbOsX3FqsaGW5yvLYzRX1dFFvcp6iZjodJns7OWhrNaJ3oRReflx/mYRMD+r+rn2otO9zhByyEXlzhoFSVUhLkO1xaQ/z06NIzZFIH5zOmCO9pttZVOLGWCVWxbQOYNnGsmfKZnVBIJUsyPgtmHy95bo1aPfU+5PHm84NEhWXpLJWkOl41qdGJcutTgg1ZQJHjCLVDdVXm9zWDVZ0fD8wGVn1EOzgF6l6TsYMy6cwQv6c+1lD3YM5DJJS0Oej1xCXBiTuviKXolgPkZKBKj7zi8q1VAKFQPI+gALAo35O1W/p5zavR2U1A9sCkxaK72G2i2hOYMMbY6LmwrLESQCmUEIKTZRxF7EDYQcRdDedga0ZdZ+Eo0kzJiZ0lQAXVztp5dq/EOqWXRc0s7bqvlTKaJEVNNFieRTauJBVWybJ1lDVsOdzQ6vpJdKTABlPkkDhYasSMysHwGTcxuRg+IS8tnsKx2YI/Aj9Cc0UEOAlnFh2jvJW7LmJh3F3Dpb6v/qNI+sLK3swjrvDmd3GLhQ6bGyzuA15FcQzyGpJt+m406PJtVGK77VjOO9pTpesfPkd6zUWKArGL09kFO50rSpdHm1bjUfUtRwv8xuNrPBFuN8HCk12QtNOahA9G1x+wAqO+OW4ul9MBVjCkS3+d16wfPWbfFy1P+xIdFqIfk/UdF+UdFNEXjklfa6eIXuL4+GvmcTsly1SEjJpUCNjC7layieQWbmbchcZ9lboDWZafRVTJql4Roz023gKxYnVyBxZo42IieY2VgmKYCf5aayjOFHczDpiNbBiEhsssDNIqsadY9bbbgRtM2dr0Z0O6O5avJa5WaGzxkU7kZkZjSr6wAujUUWtD80gFu8IFpA32Hl6PeLSoFpBDbK/JuC7FVpRp5OU8ZC2zkY5XMmIMaAs0roVgEjsW6KqNvwg/SRJLkRZ8wmmFUSFt2PKgWkBgv5b0FZiIakwg==", "base64"));
  res.write(new Buffer("pBXzsiYxTG2qsQ2vw61Y2ZKONpF9VIKnOZHJgUBvJCXUKi4oLd7I2KShzW52Kciu9PRXx9mLl1h+Lq72i+oobbIloovZvUA5tlHf6V7kk73CthzaPUeTxXPlY2gm6UhwX8yBPu/ARgJbHxH2LSb/IrQqUbip5L+T8byNmF0g5qaaIJYq69vwNl+MVEZoaBbEmAdYAQ9D1CjtzhBwP5oWcejPNYL+dBy6HxFjW5sMEKfGwgiBkX0l43uSfdKD+Ra1AaHk+BOiFkuofSalypDTJzPARkxC9+IzomciiZhM42Ua6IMf8+xzIIxsQtEHNffrpDSZ++/MYBy7l62/ZX/2+XbMm/bK78kmfdQOuQoFKM/ujoTyJ/Rqz7QGsDbpoTlXaUMImgaGnDqD/EWz/IWtzD6TvJM/MQHyDfmSQajoKK0BM5kDsBjAjNsI2MIAVO7uT8/E1czAVqn8f0wOfPq0wCYVfO6cwH5EZLa4wr9mi/czhp9b90NfybBG7jMlQ67jYjvxmWZDjnTzlIAmGzMuW596asTcZNmWPDdTNpuVtEyVlPn4HNHeSZiK7CwPU2SFb8r89tZ94fasyWfbs+cJnX927H9ux07pvSnq+d+wW8+3WDu2UdnJOjnvKRbpO4sy3yyVS6ayotmqyZ/lvm6EQs22btRnSBGBwWLPTkF5thfUaXbIaWiLWIgGuG1/zKlHMT//7xx7FAz9FeceJaqF6awj/+wnH5/IlhY0Z5b0KY65rK22A7SkJvV9NOYfi/q/1qK+JHf9mAyrXWxBsggCzfas6BHgfYK+LWwe8swex2gMVbVlCarUFPmxjWipzAtCnEHMZWrR5PubMNU2IvNZM6tbDOnHTHZqqX3HbukbHCZigZpVNT2bO43U/Zaqn/LbfSzhpp2fuGRVTneGmp74glPSZmMpUE5X8Tm+cHRj5tJ/LTkVv6wV0NDv26dt+q5oc/nTiSxJXgf55RNodC7Oz05755cnvfPj3mnvdOUbhb5SE45FZ5rKy4/vw1EsYOvjKWpDu+Ac1bTbvqh95bCopvkj/7MoAQqOwBwBD1oLsqkq584cQXhnoA9Be4z2RfHVyqfzWzZ+w2Jsmtavx79dVWN4CM16z6fz10GTB60W/EejTbW8+qPqW4D1s4C06N80rSu4M20eQB94cFXr3Dbahz5UqvSVlOjbdnmw1ZZoPZTDn995JpiQLhejwzvTThjty9+oANtcGtT2KYZKY7NgsRRMs7R/R9DIJ0DjCBrVkdudMcGk0WpdPVqvGVutL5uiDJRu31UfDx08PIYlye4Bu74bSYNp68OpnI/LYaoFfTzSKz4eWXucV97t6MASXj6trZ21KsH1gdwM8+ImWh9U/bTokSPNV0djZ70qiXx3RSNVdhV1YaXCWhmCeTWnYWlZUv3Yyqu5jVbVUlaZ/bGk2EXloZd/ZPPayz9x/D8AAAD//wMAT2IRp/NYAAA=", "base64"));
  res.end();

  return __filename;
};
