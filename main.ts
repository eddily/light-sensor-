while (true) {
    console.log("light level: " + input.lightLevel())
    if (input.lightLevel() >= 8) {
        light.setAll(color.rgb(0, 0, 0))
    } else if (input.lightLevel() > 5) {
        light.setAll(color.rgb(255, 255, 0))
    } else {
        light.setAll(color.rgb(0, 0, 255))
    }
    
}
