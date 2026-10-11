import os
from PIL import Image, ImageDraw, ImageFilter

def create_brand_icon():
    # Render at high resolution (1024x1024) for supreme supersampled crispness
    size = 1024
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # 1. Background Rounded Squircle
    # Coordinates with margin for the border
    pad = 24
    border_width = 24
    rect_box = [pad, pad, size - pad, size - pad]
    radius = 230

    # Draw dark obsidian base
    # Gradient simulation from top-left to bottom-right
    base_color = (9, 13, 38, 255) # #090d26
    border_color = (0, 255, 153, 230) # #00ff99

    draw.rounded_rectangle(rect_box, radius=radius, fill=base_color, outline=border_color, width=border_width)

    # 2. Ambient subtle emerald glow in the top-left corner
    glow_layer = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow_layer)
    glow_draw.ellipse([80, 80, 460, 460], fill=(0, 255, 153, 30))
    # Dot ambient glow in bottom-right corner
    glow_draw.ellipse([640, 600, 920, 880], fill=(0, 255, 153, 60))
    glow_layer = glow_layer.filter(ImageFilter.GaussianBlur(radius=60))
    img = Image.alpha_composite(img, glow_layer)
    draw = ImageDraw.Draw(img)

    # 3. Geometric Bold Monogram: 'N' in pure white
    # Scale coordinates from 512 base to 1024 base: multiply by 2
    n_points = [
        (260, 270), # Top-left start
        (370, 270), # Top-left stem across
        (552, 570), # Diagonal meet right stem
        (552, 270), # Right stem top
        (662, 270), # Right stem top-right
        (662, 754), # Right stem bottom-right
        (550, 754), # Right stem bottom across
        (370, 444), # Diagonal meet left stem
        (370, 754), # Left stem bottom
        (260, 754), # Left stem bottom-left
    ]
    draw.polygon(n_points, fill=(255, 255, 255, 255))

    # 4. Signature Emerald Dot: '.'
    dot_center_x = 750
    dot_center_y = 718
    dot_radius = 42

    # Dot outer soft glow
    dot_glow = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    dot_glow_draw = ImageDraw.Draw(dot_glow)
    dot_glow_draw.ellipse(
        [dot_center_x - 65, dot_center_y - 65, dot_center_x + 65, dot_center_y + 65],
        fill=(0, 255, 153, 110)
    )
    dot_glow = dot_glow.filter(ImageFilter.GaussianBlur(radius=20))
    img = Image.alpha_composite(img, dot_glow)
    draw = ImageDraw.Draw(img)

    # Dot core solid
    draw.ellipse(
        [dot_center_x - dot_radius, dot_center_y - dot_radius, dot_center_x + dot_radius, dot_center_y + dot_radius],
        fill=(0, 255, 153, 255)
    )

    return img

def main():
    root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    public_dir = os.path.join(root_dir, "public")
    app_dir = os.path.join(root_dir, "app")

    master_img = create_brand_icon()

    # 1. Save 512x512
    img_512 = master_img.resize((512, 512), Image.Resampling.LANCZOS)
    img_512.save(os.path.join(public_dir, "icon-512.png"), "PNG")
    img_512.save(os.path.join(app_dir, "icon.png"), "PNG")
    img_512.save(os.path.join(public_dir, "icon.png"), "PNG")
    print("[+] Saved 512x512 icon.png in public/ and app/")

    # 2. Save 192x192
    img_192 = master_img.resize((192, 192), Image.Resampling.LANCZOS)
    img_192.save(os.path.join(public_dir, "icon-192.png"), "PNG")
    print("[+] Saved 192x192 icon-192.png in public/")

    # 3. Save 180x180 Apple Touch Icon
    img_180 = master_img.resize((180, 180), Image.Resampling.LANCZOS)
    img_180.save(os.path.join(public_dir, "apple-icon.png"), "PNG")
    img_180.save(os.path.join(app_dir, "apple-icon.png"), "PNG")
    print("[+] Saved apple-icon.png in public/ and app/")

    # 4. Save 32x32 PNG
    img_32 = master_img.resize((32, 32), Image.Resampling.LANCZOS)
    img_32.save(os.path.join(public_dir, "icon-32.png"), "PNG")
    print("[+] Saved 32x32 icon-32.png in public/")

    # 5. Multi-resolution favicon.ico containing 16x16, 32x32, 48x48, 64x64
    ico_sizes = [(16, 16), (32, 32), (48, 48), (64, 64)]
    ico_images = [master_img.resize(s, Image.Resampling.LANCZOS) for s in ico_sizes]

    app_ico_path = os.path.join(app_dir, "favicon.ico")
    public_ico_path = os.path.join(public_dir, "favicon.ico")

    # Save to public and app
    ico_images[0].save(public_ico_path, format="ICO", sizes=ico_sizes)
    ico_images[0].save(app_ico_path, format="ICO", sizes=ico_sizes)
    print("[+] Saved multi-resolution favicon.ico to public/ and app/")

if __name__ == "__main__":
    main()
