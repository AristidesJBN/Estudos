#Escreva uma função que receba uma tupla de números inteiros e retorne uma nova tupla com os elementos pares da tupla original. Por exemplo, se a tupla for (1, 2, 3, 4, 5), a função deve retornar (2, 4).

tupla = (1, 2, 3, 4, 5)

def retorna_par():
    paresdatupla = tuple(indice for indice in tupla if indice % 2 == 0)
    return paresdatupla

print(retorna_par())

#Escreva uma função que receba uma tupla de strings e retorne uma nova tupla com as strings ordenadas alfabeticamente e sem repetições. Por exemplo, se a tupla for ("banana", "maçã", "laranja", "banana", "uva"), a função deve retornar ("banana", "laranja", "maçã", "uva").

def ordenar_e_remover_duplicatas(tupla):
    conjunto_sem_duplicatas = set(tupla)
    tupla_ordenada = tuple(sorted(conjunto_sem_duplicatas))
    return tupla_ordenada

frutas = ("banana", "maçã", "laranja", "banana", "uva")
resultado = ordenar_e_remover_duplicatas(frutas)
print(resultado)

#Escreva uma função que receba um dicionário que mapeia nomes de países para suas populações e retorne o nome do país com a maior população. Por exemplo, se o dicionário for {"Brasil": 211.8, "China": 1400.5, "Índia": 1366.4}, a função deve retornar "China".

def pais_com_maior_populacao(dicionario):
    pais_max_populacao = None
    max_populacao = -1 
    for pais, populacao in dicionario.items():
        if populacao > max_populacao:
            max_populacao = populacao
            pais_max_populacao = pais
    return pais_max_populacao

dados_paises = {"Brasil": 211.8, "China": 1400.5, "Índia": 1366.4}
pais_mais_populoso = pais_com_maior_populacao(dados_paises)
print(pais_mais_populoso)

#Escreva uma função que receba um dicionário que mapeia nomes de alunos para suas notas e retorne um novo dicionário com os nomes dos alunos aprovados e suas respectivas médias. Considere que um aluno é aprovado se sua média for maior ou igual a 7. Por exemplo, se o dicionário for {"Ana": [8.5, 9.0, 7.5], "Bruno": [6.0, 5.5, 4.0], "Carla": [7.0, 8.0, 9.0]}, a função deve retornar {"Ana": 8.33, "Carla": 8.0}.

def alunos_aprovados(dicionario_notas):
    aprovados = {}

    for aluno, notas in dicionario_notas.items():
        qtd_notas = len(notas)
        soma = sum(notas)
        media = soma / qtd_notas

        if media >= 7.0:
            aprovados[aluno] = arredonda(media, 2)

    return aprovados

def arredonda(valor, casas_decimais):
    return round(valor, casas_decimais)

notas_alunos = {"Ana": [8.5, 9.0, 7.5], "Bruno": [6.0, 5.5, 4.0], "Carla": [7.0, 8.0, 9.0]}
aprovados = alunos_aprovados(notas_alunos)
print(aprovados)

#Escreva uma função que receba dois conjuntos de números inteiros e retorne um novo conjunto com os elementos que estão em ambos os conjuntos. Por exemplo, se os conjuntos forem {1, 2, 3, 4} e {3, 4, 5, 6}, a função deve retornar {3, 4}.

def intersecao_entre_conjuntos(conjunto1, conjunto2):
    resultado = conjunto1 & conjunto2 
    return resultado

conjunto1 = {1, 2, 3, 4}
conjunto2 = {3, 4, 5, 6}
resultado = intersecao_entre_conjuntos(conjunto1, conjunto2)
print(resultado)

#Escreva uma função que receba um conjunto de strings e retorne um novo conjunto com as strings que são palíndromos. Um palíndromo é uma palavra que é igual quando lida de trás para frente. Por exemplo, se o conjunto for {"arara", "casa", "ovo", "radar"}, a função deve retornar {"arara", "ovo", "radar"}.

def palindromos_em_conjunto(conjunto_strings):
    palindromos = set()
    
    for palavra in conjunto_strings:
        if palavra == palavra[::-1]:
            palindromos.add(palavra)

    return palindromos

conjunto = {"arara", "casa", "ovo", "radar"}
palindromos = palindromos_em_conjunto(conjunto)
print(palindromos)
