using System;
using System.Collections.Generic;
using UnityEngine;

public class MapGenerator : MonoBehaviour
{
    [SerializeField] private GameObject[] preFabSections;
	[SerializeField] private GameObject[] perFabBoosters;
	[SerializeField] private Transform player;
	[SerializeField] private int startPlatformLength;
    [SerializeField] private GameObject map;
    [SerializeField] private GameObject enemy;
    [SerializeField] private int minAmountOfEnemies = 0;
    [SerializeField] private int maxAmountOfEnemies = 3;

	private int zIndex = 0;

	public List<GameObject> loadedSections = new List<GameObject>();

    private void Start()
	{
        zIndex = 20 * (int)Math.Floor(startPlatformLength * 0.35);

		for (int i = 0; i < startPlatformLength; i++)
		{
			int randomSection = UnityEngine.Random.Range(0, preFabSections.Length);
            Vector3 newPosition = new Vector3(0, 0, zIndex + (-20 * i));
            GameObject newSection = Instantiate(preFabSections[randomSection], newPosition, Quaternion.identity);
            newSection.transform.SetParent(map.transform);
			loadedSections.Add(newSection);
		}
	}

	private void FixedUpdate()
	{
		if (loadedSections[0].transform.position.z >= 180)
		{
			int randomSection = UnityEngine.Random.Range(0, preFabSections.Length);
			Vector3 newPosition = new Vector3(0, 0, loadedSections[startPlatformLength - 1].transform.position.z - 20f);
			GameObject newSection = Instantiate(preFabSections[randomSection], newPosition, Quaternion.identity);
			newSection.transform.SetParent(map.transform);

			spawnEnemies(newSection);
			spawnBoosters(newSection);

			GameObject removedObject = loadedSections[0];
			loadedSections.RemoveAt(0);
			Destroy(removedObject);

			loadedSections.Add(newSection);
		}
	}

	private void spawnEnemies(GameObject Section)
    {
		int amountOfEnemies = UnityEngine.Random.Range(minAmountOfEnemies, maxAmountOfEnemies);

		float locationX;
		float locationZ;

		for (int i = 0; i < amountOfEnemies; i++)
        {   
            locationX = Section.transform.position.x + UnityEngine.Random.Range(-14, 14);
            locationZ = Section.transform.position.z + UnityEngine.Random.Range(-9, 9);
			Vector3 newPosition = new Vector3(locationX, 1f, locationZ);
			GameObject newEnemy = Instantiate(enemy, newPosition, Quaternion.identity);
			newEnemy.transform.SetParent(Section.transform);
        }
	}

	private void spawnBoosters(GameObject Section)
	{
		int amountOfBoosters = UnityEngine.Random.Range(minAmountOfEnemies, maxAmountOfEnemies);

		if (amountOfBoosters < 3)
		{
			float locationX;
			float locationZ;

			for (int i = 0; i < amountOfBoosters; i++)
			{
				int boosterType = UnityEngine.Random.Range(0, 3);

				locationX = Section.transform.position.x + UnityEngine.Random.Range(-14, 14);
				locationZ = Section.transform.position.z + UnityEngine.Random.Range(-9, 9);

				Vector3 newPosition = new Vector3(locationX, 1f, locationZ);
				GameObject newBooster = Instantiate(perFabBoosters[boosterType], newPosition, Quaternion.identity);
				newBooster.transform.SetParent(Section.transform);
			}
		}
	}
}