while True:
    print("light level: " + input.light_level())
    if input.light_level() >= 10:
        light.set_all(color.rgb (0, 0, 0))
    elif input.light_level() > 5:
        light.set_all(color.rgb (255, 255, 0))
    else:
        light.set_all(color.rgb (0, 0, 255))

    