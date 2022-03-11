CREATE TABLE patients (
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE doctors (
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE diseases(
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE visits(
  id SERIAL PRIMARY KEY,
  doctor_id INTEGER REFERENCES doctors(id),
  patient_id INTEGER REFERENCES patients(id),
  date DATE

)

CREATE TABLE doctors_for_patients (
    id SERIAL PRIMARY KEY,
    patient_id INTEGER REFERENCES patients(id),
    doctor_id INTEGER REFERENCES doctors(id)
);

CREATE TABLE patient_diseases(
    id SERIAL PRIMARY KEY,
    patient_id INTEGER REFERENCES patients(id),
    disease_id INTEGER REFERENCES diseases(id)
);

CREATE TABLE diagnoses(
  id SERIAL PRIMARY KEY,
  visit_id INTEGER REFERENCES visits(id)

)

-- Testing 
INSERT INTO doctors
(name)
VALUES ('doc1'), ('doc2'), ('doc3');

INSERT INTO patients(name)
VALUES ('patient1'), ('patient2'), ('patient3'),('patient4');

INSERT INTO doctors_for_patients (patient_id, doctor_id)
VALUES(1,1), (1,3), (2,1), (3,1),(3,2),(3,3), (4,3);

SELECT patients.name, d.name FROM patients
JOIN doctors_for_patients dfp
ON patients.id = dfp.patient_id
JOIN doctors d
ON d.id = dfp.doctor_id;
-- result = 6 rows

DELETE FROM doctors_for_patients WHERE id = 6;

SELECT patients.name, d.name FROM patients
JOIN doctors_for_patients dfp
ON patients.id = dfp.patient_id
JOIN doctors d
ON d.id = dfp.doctor_id;
-- result = 5 rows
