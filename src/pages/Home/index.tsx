import { Play } from "phosphor-react";
import { ContdownContainer, StartCountdownButton, MinutesAmountInput, TaskInput, FormContainer, HomeContainer, Separator } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="">Vou trabalhar em</label>
                    <TaskInput id="task" placeholder="Dê um nome para o seu projeto"/>

                    <label htmlFor="">Vou trabalhar em</label>
                    <MinutesAmountInput type="number" id="minutesAmount" />

                    <span>minutos.</span>
                </FormContainer>

                <ContdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </ContdownContainer>

                <StartCountdownButton disabled type="submit">
                    <Play size={24} />
                    Começar
                </StartCountdownButton>
            </form>
        </HomeContainer>
    )
}