from flask import Flask, render_template
import random

app = Flask(__name__)

# list of meme images
images = [
   "https://pbs.twimg.com/media/D8AVtjOU8AAU6xY.jpg",
    "https://psv4.userapi.com/c848136/u255083225/docs/d3/a45514e90410/video.gif?extra=qWi3N3n4g0thdl_XHyspZuaSxFpzkWr8-VIWObXXiDTCcqUCFUoEen8Zf7X622t5tF4KD9imKovNGgDyP8syPcwOQyBpk7cwPRN2eZQpHkWS3JhVhHT7j4WdrHOd4c0yDwyGADShsMCViUyRGoAi-w",
    "https://psv4.userapi.com/c856436/u98807440/docs/d10/cac857163fa9/CCLg.gif?extra=tFt_g_HmsAZ-hCjEm1OcIYCrwvXI93G5q240ZtJS5oyL44aczukInhMMxi-fc1GnMAqbfceviB5rKVgKX_hdC1k-y4piVEduHn83AESwj5rlL7Cj5y9_oV7YdfSL_0mzjbtF3m4NY0RHKyGsgUQotg",
    "https://psv4.userapi.com/c856436/u497649948/docs/d18/3b51833aa434/ezgif-6-9a8452034b16.gif?extra=ZR28ohuypW45WqbyFe6Oq_maauM1jUCQEk_9aLoGXjrGppk5lVyMZUKNBvelxT0oQ54ULLIwZrDbX6akYNpoYdG3a9uGtcJL8eYPrrvU6Xyx13T04LEc3IQjOJ5WbfKG49NL1CcsKL219x0g5KUF6w",
    "https://psv4.userapi.com/c848420/u2000059370/docs/d16/67974dbb3d8c/file.gif?extra=8DYZ7Nciq-0Q-mFm6rPvdREfQ_2sG-UxbkNviT8FdE6y27AOcrrorJjPClQ5GXWBUggYSjq2NMY8uDb8cO59EV-zH7mCX8cSTYlZ5JIxbDx9psOpI4bUVgN4Ti_bh1fhmnu5tZvk-WutwNil6Ulqnw",
    ]

@app.route('/')
def index():
    url = random.choice(images)
    return render_template('index.html', url=url)

if __name__ == "__main__":
    app.run(host="0.0.0.0")