var path = require("path");

/**
 * GET /Yotsubato!/82
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * cookie: viewer=1
 * accept-encoding: gzip, deflate
 * host: raw.senmanga.com
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 12 Nov 2018 04:40:27 GMT");
  res.setHeader("content-type", "text/html; charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d8f7e579c02468b2d638125c945107a6d1541997627; expires=Tue, 12-Nov-19 04:40:27 GMT; path=/; domain=.senmanga.com; HttpOnly; Secure","PHPSESSID=o2i9d1ee6nimrmnfv5vd9keu80; path=/; domain=raw.senmanga.com; secure; HttpOnly"]);
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("x-powered-by", "Fat-Free Framework");
  res.setHeader("x-frame-options", "SAMEORIGIN");
  res.setHeader("x-xss-protection", "1; mode=block");
  res.setHeader("x-content-type-options", "nosniff");
  res.setHeader("pragma", "no-cache");
  res.setHeader("cache-control", "no-cache, no-store, must-revalidate");
  res.setHeader("expires", "Thu, 01 Jan 1970 00:00:00 +0000");
  res.setHeader("strict-transport-security", "max-age=5184000; includeSubDomains; preload");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "478652124b78947b-NRT");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA3SUwW4bRwyG7wLyDpQOOWkdW2gDFZFcOLaKJkYaw3WL5EjtUruMZjlrDmc3Mnoo4qfopfcCvhQ59m2qQ/sYxUqKIcvqYTGYn/y/IYeDHXXP3p5evb+YQGGlO+6M2gUcSj7ukfRagTA77oyMzdHxe28hTtF8FxI4LbAyUhgOIIELzAmOIIFLbOAXWH76a3n7GZa3vy9vPy8/3Y2erQGdUUmGkBaogWzcizZLhr0vcmFWJXQduR733iU/nSSnvqzQeOqoB6kXI7Fx79VkTFlO9y7Bksa9mqmpvNpWYsOZFeOMak4pWW36wMLG6JKQoqPx0Q5kTovGa7bFUMIMttoeDkCx6e+XIaQoAbw4Fuo/DpcoOfb/x3Zww9VObC/ocZqi7ijpejR7jqo4DfsqqDy7RwaSPdyH0k5CwXkB1xEd22IntGr+vt3t4D93d8PBv3/8uU/bvZV7XVF3hpdRSJUrYy9bA9x4gQMgBFOUnMCxmSPIWR00bAUgTDmHijR4WRXfhUlNAixgBUHpg4Ep14yuD1GUStQ5Th0BSeqjGGnof3kQf//6W4A0KvvAtgCUDEisiIExlHAdOZ27BVjUNZxq0kWG", "base64"));
  res.write(new Buffer("C2Axv1Y+mqLXjAV10YXXnuUBG7OaxKJSAAwQVo7Kt9vW3XjJSAP42WarLgNUHyWDgvRJ50lnA3uKZfWi/bqglBLXlAEKTD6m5BxJSnDSoGYw8wpvVuNDWzEHh4fP4TVWKPCGMkY4UQvwHQXjGt0BvJI2ZQiPz2kwgPiSBY3W4JZ3NLAC3gYsI1zRTZwjnEbXNrgpoL3CNm/CQUg34tPr6O3FSwoGF3HqOMV29CvmOWdhHYYUjXKviz5Mo0HGGYg3aFiA2ArS/grelqVRhDSJ1X1ZM9ZggCIR3eYCrpBD8S1gW8HBzgMs/ZQdJQ1NE6yqJMUKH/65FhR2LLn3uaMksFFSk/Js08WW6ezy8mL21XmDc5p8KH44//DuR60v06tvzr6eLL6Pk/nP+eDi5fnNYX3Sg2fHnf8AAAD//w==", "base64"));
  res.write(new Buffer("zHzbcuO6duC7v4LGOSMRWxQlUPJNMtXla7d7+7Ztd/fuLem4IBKSaFOkmoQsuwVVJWdXqmYe5nVekoekKk/JTCqpmTykKn/TlZPfmFoAdbVs7+6zdXLsKpEAFhYWgHUDsECFvhuFXRbxBxuFrZLXoa1pOkDPxqVcLqJ9M2aBlEzTCTs5J7xjUZybyJt5020prEq2tDhybJRz3CDrtLwc7XbjHFiInHt4dfK+d2v5u++Ct+cbO42N7g93H+6aP54fmTcxqmznFILKtu8Ft1rEfBvF/MFncZsxjjT+0GU24uye55w4Rlo7Ys3nCI3jnKxuAnRl5dfDGrG4Gwaxd/fro+5Sh2WbPo3bvzrqm089Fj2YUJPCfJgdLxg1kszcFNYbekdVLlIT+iTumzFqQDgzkX80YhiOJaBdOBS/bhO0x0Mn7HR9xtmvjBocCxb9ykhjJwp93+y2Qx7GX4W7snJHI61BY3bdi3zN1p5sB5UlqNdpvQSZ8zotVF6ZIiGXOJmN0H2orGy73p3muTbqR7TbZdHIC2WRzFWvKIGLQp/ZKKB3XitRnAAj0wDS86WUVbZpIkWTvpX8sOUFejpuh/00LqPKtqc5Po1jG3lOGGRlMYyUV9G+/Px/vvz+n7/8/u+//Px/t3O0sp3zvTnET47LPN62F/Mwekgw/+Fv/uIP/+uf//DX/w9+f/6r//jbf/lK/DnXi5gDGHOPmmqE4W2cNHTJIo/Fmu/FfKaFUYWY0chpw5g1epyHwWx+loetls80GKxsApqwjAKXigb8gen2Rzi3c1AEE62AKyvbzTDqaNSBKXumbwpBDmkdxtuha6MW6EfqOKzLs3OLCDnxHRb0spOuAIckBI31wfU12EHqBRMmegzS9JjvzvdpqlzqGCj3gm5vWnhQYthjpE1rCRuFzSaaG1NVtxl5rTZH2h31e8xGSOv61GHt0HdZZKOrUFPQWiwn0JBtSZ+l7XHwK1mkuq7AGuE90iJYQ0XMlYZ7NPZP9GQyfcm8q77EvUbHA1sEyzYbffn9v375+d+//PyX0zw2hWXUIydMRGZqqseT73p3Uw/gAHiOOH3lZVaP4jg3HsQIrNu212m9oP+8TivXZMyVxGWtzXtr0+wG0qsBQRhRMMUHjs9oBNwxplWqEZUAMmG4r8LumJQGD7KOFzng7CUDtkudW42HmgRT3foND7uo8lhKVLYaJUnRSzoZ9Oz1Gxo/BI49ehFCq9bLK0nK7Pbitl5Nv/FiTnlsxpxGPG1oaWKQjbVicW3DKBp59Z/Pk3w+n0/X8ZPVmzT2ZO3ngHhEndvrtsdjAJWQerMXSBHXsTaQ5qEda7bmhk6vwwJuOhGjnB34DFJ6WvUvjctaO5b2W7O19Fzv07JQEqDZGo96rLzSjs04gqSezuVikjfbCUnK/JG1awpWLw0UjdtuMZ40HO8+XNHWKe0wPQ3cnMbVfF0TQnsBFqyVhMUm2KnA3Wt7vqu3Y1xeGWIdl6csXBCO3N8Rk+eQxmnUAv113fBpcJswc+Jh52LogueQmc7kzZbXfJVMYYrkCdKoDzsdrJGsQpHWCCOpOfKoohT9uO2Ved0e0LsGjWZ0OyjQ5zW7VLENGk2p9T+ueKIpAqoMf9hsZh0a3NFY0TMx5CM0YDnuGPoW8xt2WGIS34QdtlxrezxvbX9BC72uSzmLcy84Du8U2DPYS7kcDbwOm0X/CK1DOyyiCdYdqPA8zmYY9TpzOEda7xDK4sdNhB0QnqQNBfR8Iwr34kZ2/bC1YFqjkbMG5VPYE+UdUFDeLxsZZUxlU+MWF+9p/mLr44etUJkcKaxPYg==", "base64"));
  res.write(new Buffer("S3T/lLTEoeNRH0nbmGQ1G/MLwn6/bzapw4D/ZJuXLJCbFVPT4vthX+vB1qR2mIAuMkXNSdmUPZo0zvvzjfO+xzmLZtq9oP3FTV8p4IVGcFw03fBIRTxrnNWCAIZuHmwCNFpSSKc+2wjvs53QVSM77QDKWa+c+4zGTLv0WmoDMNT2woB7QY+tPLOOaHsug3XEhIIwZtkGD7Ruz/eziZeXDMseFGrHUFPbDe8XjYgThXE8Px6T3oxcj9CVfqj0p5M81qGen6xfXvaxE7iRh90NY45gV1PZgE7P516XRlz6a1mXcjo3aL2sLGlFYa+72COecWgPgLiRl8xUYoGnPOvCPur2c412aRyrXfyZhs/H2artCdgf37xPG8yHbUMbOTzyryPWYZ0GWOORs5pkjImoJCQrWibwySqAKDU0h4zThhe47N5GJF8YWWmnzZxbcPsr2iWnD5oftlrM1bxgOyfJ+kUdWOT7V47DlkQz8eTnXHdIauNsGnHP8ZkkPBot0mda9cNkd3OWGC94vBbrU/924ZpyZL+lVGjb9AUd/aJ78NR5Fa1oUvMl6NXuL9hz9DUuwhih9uXnf/jy+3/78vN/n6B+Ac9kF3Zi+yZ5aOow7ltQblqoMnWE920ocgRV1MnfI/0kl6RtGrFr6rq87cVjWZBDmZUc+2hR+IhRO/J4wZ/Z83miyGtGtCPZL02dxsZGsbmWVvI1lQZrnc7lqBvPdqvf7+dc5ntwFpOjzcjstruvPocB81zbkucXTsM+Or08uLi6vtg53T87uT59d7J7cHH95uDiIK3JthPXO51Pa2rLzQtadjoI05o6ikxvWBtprc3AFNjpLZIe+z0vkuTcSooCm65tbdBCc+sX0JSsL9JqfZGeuCsvD8Bd/+sGQAJMiEtrU0MBTk86nSy3t3NqmiaTnax1wbJknaZa1aIm9WOGnt2UpK5D4/YJBTtpD+Jeg5QQMuJewyohNDSA9EvGuT2ISsjKk/WN4gYaGr3Ij+2B4wbvIj8uVVEu5zCfRR6nseMGUiUYKJfrdbnXYaOcuuG4wRFo3lLeiGjglk4ob5vwFnZ0bDA4jgNsju85t8hAnbAXMzfsB8hAPOw5bbkAR3WjF7ND755FpdW8EQb+Q5IgRhNedlnAKG+XVsnQuM7fN8hG3q6iULM8nbh4sKmRpv3J/FGvIcupIVze1A7Lsc61T+bhqm2niZXGg0P7k3k4JEy+WJt6+lCuUYekaZKPdg1Zt1krqqEypEObuOVDk3zSSROwfZzB/lFV+FhD8DqB/YiHm9p7+wct1IGmvt0rb2rWlv29eaUDFnJsW5/h+dq2Lso9kxTsQdo6T5dujLT1g3q8V48P8lEg6pFXmT+px4/q8VE9ztTjUD321WNPPXbU43W6dDOE9lpj2j7bvfJnk1B7v9wzraatcu9lN9Okkcble9PagB6vZa31GjL2ZU4eJMR6Y1rHpnWVs97mCM9ZRybh6fKmdmzrXOuar23bTu+k8auu+bq0D90lquDNpOBNab8c68e2bd+kUoTAEw/uTasoCZGE3ZQ/m290PBwquH1Z/r19b1onEojcQeGm9mD3TRLruPxgkrZpFfR74wFDb99IMMUF5D5hg1QqSVi7sh1Hx8ASxNc/m28M6wAP5UA547rkwYxk3cs0HuwOYx0yzLfba5A6MImvK0hJs+zGpubbecO1f9APTOtUiAPTupS/77A+KFil6oC4pRqyOiWrW7LCGhrWh8bAeihVB1a/tJof1oe47JrWJzvUG4CO2TVUQ+XVhnkihN4wT1KphnlinpjkVE9bd2ls21mChVjVG3ZOr+azW/UBMQ==", "base64"));
  res.write(new Buffer("CkO9VjMnKTwoDEWVZsmWyikO9dJMEg82hjhnWj1dYsdVUsdCdIRomB/03O90i9dqphXXaqaw7uH1Bl5JXmb4tZqpk+p6dqsurFrNFYWqFdQxzuFR/Zea/i2A6h17NW8wu2F8MgtdNc89m7zR9U/mhflBryHy3tarvyvXzcwrrJfFb3ENYSGqdSBXiDwux/qqn0qR4wrppVKrUxWPnq+IB75NgFs9+3uTnOjk+++k3GKjqQTYJLt6YR2bZF/PVX9Hs+QgSw6zW/VMrmXABGGTvNXzBsmDqJ/bNVT4VMrlaijDMjUEz8C0WjrxkpRO3khewhni4SSviaXWOgJBuUunUlx7D0pCpvDgJ31T29MKoXYEDHdkFgJ9DysuParu1W3FpakUJIBlk1fzbSWvoABZAriTTqUmyRs8OLfPM/q5ZKlXaVzJv0qn0iV4zexl0nY6U4h1QIaH8Lep0UQh0hrCRmNuxMoUtKKUebI+ai15v8GvPplkp3RepmahA6MEOheEEjQoxeWG/YNWuNdrqNCvIWNQ6JUOjMIdWIICB/0P2Au+3pCttM3CDVSi9g8aOYOcK52a5J2OM4UtXH5nU5Oc61BeQ2WN/GDXUOZd+ZN5YUuGIDWUoRlZFNi5GlqEh7z+rnALqHRyYRfoFEN9fo6hJEfgV+Si9BwJ723JCb0MwbOEJOWfJfRsUfzUwA5gYO3z4XCIh2XXLGzqkgh4LepSl7hmoaA3DBCrofrF4+fX83jHXiVGYA8uSzVUaGVydg0ZVqskWwJeVXrLoIZjNA3XuDVaRtvOl9vbDfNtGVO7YZJbvZ3JYMOZem9Ovbs2rVQsg9o6TRXw9nZROJVK0bi1dSdF1vD2tiWalcq60bKbqQIzyE+6g1/d2i2bfCiRn/QmTqV0SGCD2SzTMy9Nsqm7ePRGx2+347cWLu9qbDgcGgVXmhHy49gWTGzbINZV4mZsrT6ZpANc26whIzFiYFxwWRoJSBkFT4pPuW+SG4l0V7O2ZBtxYoAfEq/FomO35QG8FQqOChQ92DP5m8pYQ+mu9iBRdRNyuyaJtrsm2TDf4kGhvci6p6VxTxvp/XRi3QG+CjXrmXSONHIFR9r2sWWGokwGOtDV8bD8lPUtNHSGB0OwrEB0HzyPsUpbPIoAY5IfdTVCPdNidqifGafGHR7c2XdCfALNfmeSDgzbnVlY09OWlc6cGad4CBmkI8Fv5KRZ7cW1LZLU3pirbZGp2qRvh7rlqkk/qKatRjoDc6ZjqTvDNB7M5gJwGVjes/NlD0a9aL4te5kM9Mtqw1wUq17d6JukDx0EM3MnB3Sm0saokuXpcia8Oh6Oxrpnkr3HVabbYXPtfINHNueSCZG4XnJ2rGbiLEnPa1h+b5I9HZeRgQQyUNz1PQ7vyd8djcTkD86j5Mvo4EvAekOMDpKE8JoC1jRhU8CSWISNG+ZwETO/KdTiJjlnEjL07FJmCbk2OApiTgOHiUYY+owGImIQQShu2YOQqyXR9wI37AvYDhWjdYYYLzLE9HpJ+Cxo8baAZYzwAsfvuWzHbfihc3sUnIQB495nJhwauB6cMgiH+n6DOreC3fEE0bEX3IqA9YUThrceE9d5odZDonEt6+xd7eye90SHcqctZk76RDdiThgE0PVmGAnRSVo8C/yHhAzRC1zW9ALmimsKW8jMPacR7cRCLbaEmF4xiWRBJyAmYIeLZl64jDOHMzcZVwA/4mo6GIyWG8TnEWsyoI51WNRigZOMVJdGLOCnocsEZ51u0OuIFuMXNHAl/r3QZTswafzK67CwByPiQrQoh+0hFkgMvC1gYS8o59Rp77lBMg==", "base64"));
  res.write(new Buffer("l1MnhWK0qATsh1PzfRMLpxcBDdfyVE/w6OEq3JnFFAs/hJ0PATvAYrTaFUHYjbq3zL1rh59p0+tH7L4rRvtugoeXPPKCloAwaBExuUEqPu+In/KC7tFu1wta0CkYgpgdBYCPx9PoRNxrxDwS5IBY4yqi6YdhJOTe5FlT7MP08/D1yVXSGrvvehGLBbv3Yu4FLcUgsSpMxhEGQT4f9cAJuFgvAtPAxIiI+cKLT+mpiCNHRKwT3rHZ0Q8D4QUxi/gua4YRE2HAoiiMBGwxiGSLAZrd4TzyGj0u2350wCvZOeGeWNyEwdG73cOb4O7t/umd33MExO4pZhS9wIMtUTVDkhYRe7CfvAd7swJChF02gtpnEyjqjHnQWisCTwqyYYmY9wKRJ6JYLAiysbaWz5NNa12EgeewiVB2R1XJ+qYgW5Zg98wRcdT078UF7+5TTvfaNAiYHwuyviVCGRpNfWGJbq9xLfcqPFcEPd+XGW0at4VTEGQtLxwFI3ejRZe2GHUtQd248aAiVpM8UC8hdYXKjB8CN4lfFWEAW8APcHTNnDYEXYuLq71zxqI9JfkA5BBgJ/ljCbKZz4tO+HkBWNgRfda49fjjMnYvlZerJAUOXUWiLqZyfMoFnJ2yXuQLPwwEXHAQ3Z7wHHbJIoh5BX44Dh3q70+iyBOtddZsgvqcmlxQLuOEApoabSHjKUQvYLFDu6A8pQZMrjJ4EF0uivm8WC+I/bOTPRWUewzC7Iqd3b39g8PXb47efn98cnp2/sPF5dW79x9+/PgTbTgua7ba3s2t3wnC7qco5r27/v3D5zyxCsW19Y3NLVAUYi2fCIVSMkCMcL24C1QoitW+oGjT+KwfnCeBwsKDSZNMIWDzV6hdw4R5310cwV2MMJA9BjvkQ2yzgFsXotFrNHwWC1X5BPa+ZEPIQMhAzSjs7CVqExkoUTrIQLVaPyMfDWSgFqqX2R31JyEjzOBGYFAjMkI88Jp6ZE+K8EBZP51t81fJTlm1WC9F+khx6SzHMcYZXWf/zea4Ulh7pZRRdQS+Vq/rLGNt4RIzR3oRVgV4aKxOUI7B1+t1Pfe7nKEAMR40w0gvB9lsGYfVSA9w3abVoC4EvJepXX1MrRZWWX1YN6Z6Mi4aNbNRHxqBTYYT7IA1ldKZzWZoCVhfu2Ctg/uuPsrerGeg8cwkPdpFrG7VsQGIMC4nDbLhuF6+bqxbhmXlx+CFSb+ten0MSOrYyBuDIcZT4ZsLNu1BOUSj05uKdsGo6wWtle2Y+czh8mgAGEfBKLU0OvjKo8pZwDTAsJ1TRY9gCNIUJibD3tQbquz4vqwXT1XMqeK5MLhKcu4xpkidwiW3ZpAWBkplyaygxa6TEj09Of1IGxq4cKakCT/uyFYRVbaKcCFq58OTPdncQpXNLXVr6mmgTdNCFfiV96wirlnPwALkSwg3JMINifB5QAB7CWgdVTbXXwJaQ5XNtZeACqiyWdCycEnoaSBr8ezLW2izFZ+Y/NlDRdeLQZO5qPIf/+N/fvnLf/rPf/zbMfhXHYYVkkP8yh/+99/N4JkNZZg99XjigEMbxVJDuK5ma9WVgdaL/NIzQdVKoOaP517x8JYFNrGCMPocR2Gja/lmwfI3bu69YM37FN8ibWh8I3ZrqdgLS8VeXCr2taViX18q9o2lYt9cKvatpWIn+eWiX660kuWKK1muvJLlCixZrsSS5YosWa7MkuUKLVmu1FrLlVpryTZ2uVJrLVdqreVKrbVcqbWWK7XWcqXWWq7UWsuV2sJypbawXKktLNk1Xq7UFpYrtYXlSm1huVJbWK7UFpYrtYXlSm1xuVJbXA==", "base64"));
  res.write(new Buffer("rtQWlyu1xSWvaJcrtcVfJrUr9fKKuulH47Zma+pQ0hydQJmQXV7xmvoqvOHBSgJHyitDOJcbZ4w3ciFtJrvGOsohA/0GYaxlZZWV3443jDUdD7QVr9NKbrs3GOyp69pvdfQbuJUOWykIG8mmiiGbh4t6ZW36KvoodHlco6LNRzXLopDK68FfewEIrhM0IvVBDbk3CjR6QUszTVOb3yOaj3VGi/NmA/sDiNwfB0PHNHAb4b2N5KFINqYdlg0jD66dJDnqfCtJdcNurxsjFUO9tVVwNtY3xjHU4/S3xFCTXy2G2tramsRQW2vfFkRNmkXXyf9Jg6jJLw6iToj7miDq5XDAZsMtFPPumAPG6W/hgMKfFwfkLdosrK39KTmg8Is5ICHuv54DLGtrw9ncHHPAOP0tHFD8c9MBW0XHKvwpOaD4FTpAEvc1HDBnpmg/yH6WFx/WC5OLkN9y20L7ij8w/dDZUwoXtNUFjPH3NkpAFDLgczLvIr8EZy/yi1OBBFZf/JCN5pKcbruLjKhUTbphyOcGqQ/LX03U44sfca/LouTIe3zxo8UCrxdP5750+eOpKx3D8tgzmYR5wGEwUMONwH7iMwgIAksQLnP7LvRcLb9qTyAhtuvVTKr0/EcK5NdyEEROGoEpPzTlBnF2FDmCjMCUUsMMPvMNgwCXgcroJRojhXMSz4WMaDHGCA8Bo5rXo8DjNhxgT52DQyl8/sTgthxfGVKkE0as72bGGxvBSwCRPe91dqMQrnj6BrUH1/kS+uPCLDI5GxkqLqI0fcoPZ/bJ5BqRQQ3PCA0HuuTa+bK7zUwVdQdBwTq3mTkJJtPdTAZjCALmtl5IcRkErAcLYYqGZ+tkLRXIwGA9Wgi0boT2eiEVGTJSSg/wK88O7fViSaUjCBmGNAQlOxl5kH2dN1X0HAQMz+XwRzneo5xwHFrgDIdlWQhRZtOxDh5EeMqTTfvRzD/FaYkWwmX4jsEkZEtH0yoMGasEG8xMvp2RBCyZj8KSpIpRpfI7XpOAJvgqlsHMJFRsmrzVvOHoGIKdhxIAXP/pcsXSh2EkP0IYt1mkOg7wi8pUIJEK4tMZRKZPY0No1bbZK1fnRoRLkxhDPTSstTweGs780ElJ0hOOfxwglYSFmgsjq0aFT0RXYX0wiZAqVQegQ0sIotNKk7C0UrFYUJd7RgFmpepgLv5sdN+Hm7MxbJO+cDxY5eYkuE1MJVKpLLHtqYyptyTmUEcy7g3J+0F87n7QgutBzfzMHZ1JMrkeBKF0+sIWkwtD3JSBrXBjiGxZNZOsb8I1ofWtmmmtFdWNIROC+aYvDMF9oTxJ7gtNMLxEj7ozxGyOh8ZIPqZGV0cIj/NlsJo+rZW4uSC0TWfGFBsNZxL4UdKd57ngZXENXhTXQIprlEG5HNweQjmUoaZSqzqXSZ1n1jDOICmcwQLZG2lcBt9pmHU7zAgvMI27D0euPgc4dk8yKPsZZebRVFkdp1Kxvij/F0h4gIdGPKE5UgPo2egmDoMuyijbBR9n1WXcYJ7Mm7PQrnJjvB0S4QzYFzQKybZRxqsbzvjLKY+GMjRvQi+AnROMy2B0FcnX8IkDFnPdMSLDw6YkByLeF3VpsbEGHT8y1yNyy8xMYqUXBLnxoSHtQotxNZIXDD5VO2MimvoqM4OpUhUZOdJ1L/Idf5bvElcX5AWYDxSamfiE1VFC+nr1DJr1Ra8jSY1kRb7ITvB2FPY1GKgDKNKR4wIQkkL7mHUXddJezYONmeEfDlMyP2ryE6Xs6XFT5X8uIxdLA7KEkZvu5vNjN509E0cqx6b82NNO1sSplM4fZcInvwxVxQ==", "base64"));
  res.write(new Buffer("tm0+C7PYDR8NsqzKzckNA3M6Uh1iXnFCsXTQJ9H+c3M9M+Lb05OROJmYRw8DNi9pcFf9MR/peChjlMEIzyDOZAw2T4g+HtNkNJLhn6Vv8RylUs+JdrVeBn0OenaZ6hwyQKPrvLq4rG4v0JLSSM3BJ+vYDHqFjCeaMZ5sxGz0YF2EcXlkxNTHhjCvBvVEG4+VPDJ0yDamg6PxIGa81915aQC4wfAQY7m7rk05lGx2AhP3cqHfroTEa+rA74929CPWnLhhTc9nYIUwhm5xO1/mi9izzDMZDNhm9AivTxABjlRKnytPzBzKzOWrUXy+ualV+KPaC9jcmBsgYPzyZP2a+PhftxEx/c3bR9t26rhh0Qep9tT30+L5LR7Xiz/14mvehrsW83s8lZWV3HffrXynaRcHe2cnJwen+wf72t7Z6eHR63cXO1dHZ6fa+52Lo53d44PLknawf3Sl7Zzua+9OFfSVdvXmQLs82JOQuwfHZx+0qzNN7Vxp+x9Pd06O9rT3O8fvDi61w4uzE+3j2bsL7fx45+rw7OJEO7vQ9k4uTSDg+GDn4lT78Oajtn9weHR6dPoacF8eTNrXji61o5Pzs4urndOrkjY6TVEdlKs26na8INcLYF8tpj64NrnfOGHQ9Fq9SHJi9o5GHsTyxt/l1BlUMj4KSrP/PwAAAP//", "base64"));
  res.write(new Buffer("rJ1tS8MwEMff91Mc88UE+zDRbchwImzoZEyZ+nqkNtW6rilNuzLE7y53SWa3bjrEV4U2HHloEpK7+/2h4iqCD4t+dTwMuhVg8e/UnB6A58FUOaTg4fpmOHuejpWMwEoUGcWgNyW8sAQPOywG/GzqZn32rE0uJlob3E+aT2oIdEffjh5hPJoMVTsq0EwbCKG5l51pGRgmsjBNKyr9iCipAGmYVLK64Tdpw0fuiczZIm3acIILIWZz4TJlHQd040RkTBezzja5l2vspbWLe6mZajwh0YQ7tmSPOgJaAPobibdfC7iu1Psq4+HMmGv0NVJQQipKjqAufwUDVXqberk9a3yR52KhIJS1tAUnKYi1tcYa1aapYvI5CoolG3X7OlnAqUCp98acb1EMWZaJ0ol5aFiJ9Zj0qh2dJWgqC/8VuA47q6UIdpruW4fSmYfGgP3M46t36x5gXyhEXgc1I1ZOvepbmPZBGh1E6Ao5Q92IQCl3RBJK7qO6ArCMr0URtDRGlEH6fWpTftlRiJMY4mhOWhimqLaOn4RPuytpaXAbRRVkhGxyv1ihIxcLkzIGlxxwrYpEIm3QihK4a8aAKiQypl/DhhLtAFuyiFKqXHh6Y8lckggFrSeySFHYxt3Za+mMrmIPGPM/4Cq93SOsOcgHQOk9T3Zdzf8yMPqzVsvTr2ZlFLzy3H2XR2nhR8Flxpx2q3vRvfDbp+ftzksnZBusek8T4j1SK/oCAAD//w==", "base64"));
  res.write(new Buffer("AwBQhzCgvWgAAA==", "base64"));
  res.end();

  return __filename;
};