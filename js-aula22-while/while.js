let vel = 80

while (vel > 0){
    alert("O carro está a " + vel + "km/h")
    vel -= 20
    alert("Diminuido  a 20km/h")

    if(vel === 40) break 
}

alert("O carro parou.")