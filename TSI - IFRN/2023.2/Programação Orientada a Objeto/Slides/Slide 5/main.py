vencedor = ""

equipe1 = input("Digite o nome da primeira equipe: ")
equipe2 = input("Digite o nome da segunda equipe: ")

saldoE1 = 0
saldoE2 = 0
golsE1 = 0
golsE2 = 0
saldoDeGolsE1 = 0
saldoDeGolsE2 = 0

def primeiraPartida():
    global golsE1, golsE2, saldoDeGolsE1, saldoDeGolsE2
    golsE1 = int(input(f"Digite o placar de gols da equipe {equipe1} no primeiro jogo: "))
    golsE2 = int(input(f"Digite o placar de gols da equipe {equipe2} no primeiro jogo: "))
    saldoDeGolsE1 = golsE1
    saldoDeGolsE2 = golsE2
    comparaPartida()

def segundaPartida():
    global golsE1, golsE2, saldoDeGolsE1, saldoDeGolsE2
    golsE1 = int(input(f"Digite o placar de gols da equipe {equipe1} no segundo jogo: "))
    golsE2 = int(input(f"Digite o placar de gols da equipe {equipe2} no segundo jogo: "))
    saldoDeGolsE1 = saldoDeGolsE1 + golsE1
    saldoDeGolsE2 = saldoDeGolsE2 + golsE2
    comparaPartida()

def comparaPartida():
    global saldoE1, saldoE2, golsE1, golsE2
    if golsE1 > golsE2:
        saldoE1 = saldoE1 + 3
    elif golsE2 > golsE1:
        saldoE2 = saldoE2 + 3
    else:
        saldoE1 = saldoE1 + 1
        saldoE2 = saldoE2 + 1

def resultado():
    global vencedor, saldoE1, saldoE2, saldoDeGolsE1, saldoDeGolsE2
    if saldoE1 > saldoE2:
        vencedor = equipe1
    elif saldoE2 > saldoE1:
        vencedor = equipe2
    else:
        if saldoDeGolsE1 > saldoDeGolsE2:
            vencedor = equipe1
        elif saldoDeGolsE2 > saldoDeGolsE1:
            vencedor = equipe2
        else:
            disputaPenalti()

def disputaPenalti():
    global vencedor
    golsE1 = int(input(f"Gols da equipe {equipe1} nos pênaltis: "))
    golsE2 = int(input(f"Gols da equipe {equipe2} nos pênaltis: "))
    if golsE1 > golsE2:
        vencedor = equipe1
    elif golsE2 > golsE1:
        vencedor = equipe2
    else:
        print("A disputa de pênaltis não pode terminar em empate. Tente novamente.")
        disputaPenalti()

def q2():
    primeiraPartida()
    segundaPartida()
    resultado()
    print(f"O vencedor é {vencedor}.")

q2()