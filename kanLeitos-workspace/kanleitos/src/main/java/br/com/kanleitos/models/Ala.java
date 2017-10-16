package br.com.kanleitos.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.json.JSONException;
import org.json.JSONObject;

@Entity
public class Ala {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idAla;

	@Column(name = "nomeAla", nullable = false)
	private String nomeAla;

	@Column(name = "inativa", nullable = false)
	private boolean inativa;

	public Ala() {
		setNomeAla(null);
		setInativa(false);
	}
	
	private static class Alakeys {

		private static final String NOME_ALA = "nomeAla";
		private static final String INATIVA = "inativa";

	}

	public Ala(JSONObject json) throws JSONException {

		if (json.has(Alakeys.NOME_ALA))
			setNomeAla(json.getString(Alakeys.NOME_ALA));

		if (json.has(Alakeys.INATIVA))
			setInativa(json.getBoolean(Alakeys.INATIVA));

	}

	public int getIdAla() {
		return idAla;
	}

	public void setIdAla(int idAla) {
		this.idAla = idAla;
	}

	public String getNomeAla() {
		return nomeAla;
	}

	public void setNomeAla(String nomeAla) {
		this.nomeAla = nomeAla;
	}

	public boolean isInativa() {
		return inativa;
	}

	public void setInativa(boolean inativa) {
		this.inativa = inativa;
	}

}
