import json
import os
import re

# Mapa u kojoj se nalaze JSON datoteke (trenutni direktorij)
locales_map = '.'

# Prođi kroz sve .json datoteke u mapi
for filename in os.listdir(locales_map):
    if filename.endswith('.json'):
        putanja = os.path.join(locales_map, filename)
        
        # Učitaj JSON
        with open(putanja, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        # Prati je li bilo promjena
        promjene = False
        
        # Za svaki ključ koji počinje s 'discovery_'
        for key in list(data.keys()):
            if key.startswith('discovery_'):
                vrijednost = data[key]
                # Ako već nema <strong> tag (provjeri početak)
                if not re.search(r'^<strong>.*?</strong>', vrijednost, re.IGNORECASE):
                    # Podijeli na prvi dio do dvotočke
                    dijelovi = vrijednost.split(':', 1)
                    if len(dijelovi) > 1:
                        # Prvi dio (npr. "Kinematic Lock") stavi u <strong>, a ostatak ostavi
                        novi = f"<strong>{dijelovi[0]}:</strong>{dijelovi[1]}"
                        data[key] = novi
                        promjene = True
                        print(f"{filename}: {key} -> dodan bold")
                    else:
                        # Ako nema dvotočke, preskoči (ili možeš cijelu staviti u bold)
                        pass
        
        # Ako bilo promjena, spremi natrag
        if promjene:
            with open(putanja, 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
            print(f"Ažuriran {filename}")

print("Gotovo! Svi discovery ključevi sada imaju bold.")