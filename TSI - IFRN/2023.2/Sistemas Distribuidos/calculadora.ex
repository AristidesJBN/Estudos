defmodule calculadora do:

  def soma(a, b) when is_number(a) and  is_number(b) do: a+b

  def subtracao(a, b) when is_number(a) and  is_number(b) do: a-b

  def multiplicacao(a, b) when is_number(a) and  is_number(b) do: a*b

  def divisao(0, b), do: raise "divisão por zero."

  def divisao(a, b) when is_number(a) and  is_number(b) do: a/b

  def raizQuadrada(a, b, c) when  is_number(a) and  is_number(b) is_number(c) do:
          delta = b*b - 4*a*c

          if delta > 0 do:
            raiz1 = (-b + :math.sqrt(delta)) / (2*a)
            raiz2 = (-b - :math.sqrt(delta)) / (2*a)
            {:real, raiz1, raiz2}
          elsif delta == 0 do
            raiz = -b / (2*a)
            {:real, raiz}
          else
            parte_real = -b / (2*a)
            parte_imaginaria = :math.sqrt(abs(delta)) / (2*a)
            raiz1 = {parte_real, parte_imaginaria}
            raiz2 = {parte_real, -parte_imaginaria}
            {:complexa, raiz1, raiz2}
          end
      end
end
