import Link from "next/link";
import { NeonButton } from "@/components/common/StyleButton";

import {
  Div,
  POne,
  PTwo,
  PThree,
  Back,
  ExcercisesHeader,
  ExercisesContainer,
  PZero,
  BackContainer,
  OptionContainer,
  DescriptionContainer,
} from "./styled";
import useDeleteTraining from "@/api/hooks/useDeleteTraining";
import { useRouter } from "next/router";

export default function ViewTraining({ startClicked, training, id }: any) {
  const { deleteTraining } = useDeleteTraining();
  const router = useRouter();

  async function deleteTrainingById() {
    try {
      console.log(training.id);
      await deleteTraining(training.id);
      router.push("/training");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Div>
      <Link href={"/training"} style={{ textDecoration: "none" }}>
        <BackContainer>
          <Back></Back>
          <h3>voltar para as fichas</h3>
        </BackContainer>
      </Link>
      {training.type === "circuit" && (
        <>
          <PZero>
            Exercícios feitos em {training.exercises[0].series} circuitos
          </PZero>
          <ExcercisesHeader>
            <POne>Exercícios</POne>
            <PTwo>Repetições</PTwo>
          </ExcercisesHeader>
          {training.exercises &&
            training.exercises.map((ex: any) => (
              <ExercisesContainer key={ex.id}>
                <POne>{ex.name}</POne>
                <PTwo>{ex.repetitions}</PTwo>
              </ExercisesContainer>
            ))}
        </>
      )}
      {training.type === "series" && (
        <>
          <PZero>Exercícios feitos com séries</PZero>
          <ExcercisesHeader>
            <POne>Exercícios</POne>
            <PTwo>Séries</PTwo>
            <PTwo>Repetições</PTwo>
          </ExcercisesHeader>
          {training.exercises &&
            training.exercises.map((ex: any) => (
              <ExercisesContainer key={ex.id}>
                <POne>{ex.name}</POne>
                <PTwo>{ex.series}</PTwo>
                <PTwo>{ex.repetitions}</PTwo>
              </ExercisesContainer>
            ))}
        </>
      )}
      <DescriptionContainer type={training.type}>
        <PThree>Descrição: {training.description}</PThree>
      </DescriptionContainer>

      <OptionContainer type={training.type}>
        <NeonButton onClick={() => startClicked()}>Iniciar</NeonButton>
        <Link href={`/training/${id}/report`}>
          <NeonButton>Relatorio do treino</NeonButton>
        </Link>
        <NeonButton onClick={() => deleteTrainingById()}>Deletar</NeonButton>
      </OptionContainer>
    </Div>
  );
}
