import React, { useState } from 'react';
import { Tarefa } from '../../models/Tarefa';

function TarefaCadastro() {
    const [nome, setNome] = useState<string>('');
    const [titulo, setTitulo] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');
    const criadoEm = useState<Date>;
    const [categoria, setCategoria] = useState<number>(0);
    const [status, setStatus] = useState<number>(0);

    function handleSubmit (e: any) {
        e.preventDefault();

        var novaTarefa = {
            nome,
            titulo,
            descricao,
            criadoEm,
            categoria,
            status


        };

        fetch('http://localhost:5000/api/categoria/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novaTarefa)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            setNome('');
            setTitulo('');
            setDescricao('');
            setCategoria(0);
            setStatus(0);
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    };

    return (
        <div>
            <h2>Cadastrar Nova Tarefa</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" value={nome} onChange={e => setNome(e.target.value)} required />
                </label>
                <label>
                    Descrição:
                    <input type="text" value={titulo} onChange={e => setDescricao(e.target.value)} required />
                </label>
                <label>
                    Categoria:
                    <input type="number" value={categoria} onChange={e => setCategoria(Number(e.target.value))} required />
                </label>
                <label>
                    Status:
                    <select 
                    name="statusId" 
                    >
                        <option value={1}>Não Concluido</option>
                        <option value={2}>Concluido</option>
                    </select>
                </label>
                <button type="submit">Cadastrar Tarefa</button>
            </form>
        </div>
    );
};

export default TarefaCadastro;