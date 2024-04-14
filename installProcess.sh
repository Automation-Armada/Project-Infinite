echo
echo -n "Cargando... |"
echo
npm install & pid1=$!
npx playwright install & pid2=$!

# Mostrar la barra de carga mientras se ejecutan npm install y npx playwright install
while kill -0 $pid1 &>/dev/null || kill -0 $pid2 &>/dev/null; do
    echo -n "■"
    sleep 1  # Ajustar la velocidad de la barra de carga según sea necesario
done

# Mostrar carga completa cuando las instalaciones hayan terminado
echo
echo -e " Carga completada.\n"
cat starship.txt
