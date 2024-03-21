using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Shoot : MonoBehaviour
{

	[SerializeField] private GameObject Bullet;
	[SerializeField] private float shootCooldown = 5;
	private float shootCooldownTime = 0;

	void Start()
    {
        
    }

    void Update()
    {
		if (shootCooldownTime == 0 && Input.GetKeyDown(KeyCode.Mouse0))
		{
			Vector3 location = new Vector3(transform.position.x, transform.position.y, transform.position.z + 4f);
			GameObject newBullet = Instantiate(Bullet, location, Quaternion.identity);
			newBullet.transform.rotation = transform.rotation;
			shootCooldownTime = shootCooldown;
		}

		if (shootCooldownTime > 0)
		{
			shootCooldownTime -= Time.deltaTime;
		}
	}
}
