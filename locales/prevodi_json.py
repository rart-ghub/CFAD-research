import json
from deep_translator import GoogleTranslator
import time

# --- TVOJI ORIGINALNI KODOVI (kako si ih ti zamislio) ---
originalni_jezici = [
'tl'
]

# --- RJEČNIK ZA PRESLIKAVANJE ---
# ključ = tvoj kod, vrijednost = kod koji prihvaća deep_translator
mapa_kodova = {
    'he': ['iw'],
    'tl': ['fil', 'tl', 'ph'],
    'jv': ['jw'],
}

# --- GLAVNI DIO ---
with open('en.json', 'r', encoding='utf-8') as f:
    en_data = json.load(f)

for lang in originalni_jezici:
    # Ako treba preslikavanje, uzmi pravi kod, inače ostavi original
    pravi_kod = mapa_kodova.get(lang, lang)
    print(f'Prevodi se na {lang} (koristim kod {pravi_kod})...')
    
    try:
        prevodilac = GoogleTranslator(source='en', target=pravi_kod)
    except Exception as e:
        print(f'JEZIK {lang} NIJE PODRŽAN ni s kodom {pravi_kod}. Preskačem.')
        continue

    novi_data = {}
    for key, value in en_data.items():
        if key.startswith('pdf_'):
            novi_data[key] = value
        else:
            for pokusaj in range(3):
                try:
                    prevod = prevodilac.translate(value)
                    novi_data[key] = prevod
                    time.sleep(0.3)
                    break
                except Exception as e:
                    print(f'Greška za "{key}" na {lang} (pokušaj {pokusaj+1}): {e}')
                    time.sleep(3)
            else:
                print(f'Neuspjeh za "{key}" na {lang}, ostavljam original.')
                novi_data[key] = value

    with open(f'{lang}.json', 'w', encoding='utf-8') as f:
        json.dump(novi_data, f, ensure_ascii=False, indent=2)

    time.sleep(2)

print('Gotovo!')