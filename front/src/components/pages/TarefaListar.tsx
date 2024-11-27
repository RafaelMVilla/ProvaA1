import React, { useEffect, useState } from 'react';
import { Tarefa } from '../../models/Tarefa';

const TarefaListar: React.FC = () => {
    const [tarefas, setTarefa] = useState<Tarefa[]>([]);

    useEffect(() => {
        fetch('<https://api.exemplo.com/produtos>') // Substitua pela URL da sua API
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na requisição: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                setTarefa(data);
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    }, []);

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th>Criado Em</th>
                    </tr>
                </thead>
                <tbody>
                    {tarefas.map(tarefa => (
                        <tr key={tarefa.id}>
                            <td>{tarefa.id}</td>
                            <td>{tarefa.titulo}</td>
                            <td>{tarefa.descricao}</td>
                            <td>{new Date(tarefa.criadoEm).toLocaleDateString()}</td>
                            <td>{tarefa.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TarefaListar;