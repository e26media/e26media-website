from PIL import Image, ImageEnhance, ImageFilter, ImageOps
import os
import re
import requests
from io import BytesIO

ROOT = os.path.join(
    os.path.dirname(__file__), "..", "frontend"
)
PUBLIC = os.path.join(ROOT, "public", "client-logos")
ASSETS = os.path.join(ROOT, "src", "assets", "client-logos")

for d in (PUBLIC, ASSETS):
    os.makedirs(d, exist_ok=True)

TAWAKKAL_SRC = r"C:\Users\ceo\.cursor\projects\c-Users-ceo-Downloads-e26media-web2-0-main\assets\c__Users_ceo_AppData_Roaming_Cursor_User_workspaceStorage_25df8bf1604ee540418d361757d313c2_images_image-c75ea71e-4809-41e0-92d1-3a05d28d8644.png"


def save_both(name: str, img: Image.Image):
    for folder in (PUBLIC, ASSETS):
        path = os.path.join(folder, name)
        img.save(path, format="PNG", optimize=True)


def enhance_logo(img: Image.Image, scale: int = 4) -> Image.Image:
    img = img.convert("RGBA")
    w, h = img.size
    img = img.resize((w * scale, h * scale), Image.Resampling.LANCZOS)
    img = ImageEnhance.Sharpness(img).enhance(1.35)
    img = ImageEnhance.Contrast(img).enhance(1.08)
    return img


def process_tawakkal():
    img = Image.open(TAWAKKAL_SRC)
    # Crop to content, keep generous padding
    bg = Image.new("RGBA", img.size, (255, 255, 255, 255))
    composite = Image.alpha_composite(bg, img.convert("RGBA"))
    bbox = composite.getbbox()
    if bbox:
        img = img.crop(bbox)

    # Icon-only crop for marquee (top emblem area ~58% height)
    w, h = img.size
    icon = img.crop((0, 0, w, int(h * 0.58)))
    icon = enhance_logo(icon, scale=5)
    save_both("tawakkal-overseas.png", icon)

    # Full wordmark version for larger displays if needed
    full = enhance_logo(img, scale=4)
    save_both("tawakkal-overseas-full.png", full)
    print("tawakkal", icon.size, full.size)


def fetch_abrar_logo():
    headers = {"User-Agent": "Mozilla/5.0"}
    html = requests.get("https://www.abrarcaterers.com/", headers=headers, timeout=20).text
    candidates = []

    for match in re.finditer(r'<meta[^>]+property=["\']og:image["\'][^>]+content=["\']([^"\']+)', html, re.I):
        candidates.append(match.group(1))
    for match in re.finditer(r'<link[^>]+rel=["\']apple-touch-icon["\'][^>]+href=["\']([^"\']+)', html, re.I):
        candidates.append(match.group(1))
    for match in re.finditer(r'<link[^>]+href=["\']([^"\']+)["\'][^>]+rel=["\']apple-touch-icon', html, re.I):
        candidates.append(match.group(1))
    for match in re.finditer(r'<img[^>]+(?:class|id|alt)=["\'][^"\']*logo[^"\']*["\'][^>]+src=["\']([^"\']+)', html, re.I):
        candidates.append(match.group(1))
    for match in re.finditer(r'src=["\']([^"\']*logo[^"\']*)["\']', html, re.I):
        candidates.append(match.group(1))

    # common WP uploads path fallback
    candidates += [
        "https://www.abrarcaterers.com/wp-content/uploads/2023/05/cropped-abrar-caterers-logo.png",
        "https://www.abrarcaterers.com/wp-content/uploads/2023/05/abrar-caterers-logo.png",
    ]

    base = "https://www.abrarcaterers.com"
    seen = set()
    for raw in candidates:
        url = raw if raw.startswith("http") else base + raw
        if url in seen:
            continue
        seen.add(url)
        try:
            r = requests.get(url, headers=headers, timeout=20)
            if r.status_code != 200 or len(r.content) < 500:
                continue
            img = Image.open(BytesIO(r.content)).convert("RGBA")
            if img.width < 40 or img.height < 40:
                continue
            if img.width > 800:
                ratio = 800 / img.width
                img = img.resize((800, int(img.height * ratio)), Image.Resampling.LANCZOS)
            save_both("abrar-caterers.png", img)
            print("abrar from", url, img.size)
            return
        except Exception as exc:
            print("skip", url, exc)

    raise RuntimeError("Could not fetch Abrar Caterers logo")


if __name__ == "__main__":
    process_tawakkal()
    fetch_abrar_logo()
