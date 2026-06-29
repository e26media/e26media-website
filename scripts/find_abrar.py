import requests
import re

h = requests.get(
    "https://www.abrarcaterers.com/",
    headers={"User-Agent": "Mozilla/5.0"},
    timeout=20,
).text

for pattern in [
    r'src=["\']([^"\']+)["\']',
    r'href=["\']([^"\']+)["\']',
    r'content=["\']([^"\']+)["\']',
]:
    for m in re.finditer(pattern, h, re.I):
        u = m.group(1)
        if any(x in u.lower() for x in ["logo", "abrar", "favicon", "icon", "brand"]):
            print(u)
